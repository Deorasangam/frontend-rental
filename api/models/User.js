// backend/models/User.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?[\d\s-]+$/, "Please enter a valid phone number"],
    },
    profileImage: {
      data: Buffer,
      contentType: String,
    },
    role: {
      type: String,
      enum: ["user", "owner", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
    properties: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
    notifications: [
      {
        type: {
          type: String,
          enum: ["booking", "message", "system"],
          required: true,
        },
        title: String,
        message: String,
        read: {
          type: Boolean,
          default: false,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    preferences: {
      emailNotifications: {
        type: Boolean,
        default: true,
      },
      pushNotifications: {
        type: Boolean,
        default: true,
      },
      newsletter: {
        type: Boolean,
        default: false,
      },
    },
    lastLogin: Date,
    status: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Method to get reset password token
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
  return resetToken;
};

// Method to add notification
userSchema.methods.addNotification = function (type, title, message) {
  this.notifications.push({
    type,
    title,
    message,
  });
  return this.save();
};

// Virtual for full name
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for unread notifications count
userSchema.virtual("unreadNotificationsCount").get(function () {
  return this.notifications.filter((notification) => !notification.read).length;
});

// Virtual for active bookings
userSchema.virtual("activeBookings", {
  ref: "Booking",
  localField: "_id",
  foreignField: "user",
  match: { status: { $in: ["pending", "confirmed"] } },
});

// Method to toggle favorite property
userSchema.methods.toggleFavorite = async function (propertyId) {
  const index = this.favorites.indexOf(propertyId);
  if (index === -1) {
    this.favorites.push(propertyId);
  } else {
    this.favorites.splice(index, 1);
  }
  await this.save();
  return this.favorites;
};

// Indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ "notifications.read": 1 });
userSchema.index({ status: 1 });

// Instance method to check if user is active
userSchema.methods.isActive = function () {
  return this.status === "active";
};

// Static method to get active property owners
userSchema.statics.getActiveOwners = function () {
  return this.find({ role: "owner", status: "active" });
};

// Compile and export model
const User = mongoose.model("User", userSchema);

module.exports = User;
