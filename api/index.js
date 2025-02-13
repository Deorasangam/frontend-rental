// api/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Import models
const Property = require("./models/Property");
const User = require("./models/User");
const Booking = require("./models/Booking");

// Import middleware and config
const { authenticateToken } = require("./middleware/authMiddleware");
const { jwtSecret } = require("./config");

// Constants
const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/rental";

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware
app.use(express.json());
app.use(cors());

// backend/index.js

// Update MongoDB connection with proper options
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase socket timeout
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/Register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const UserDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    res.json(UserDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({
//         status: "error",
//         message: "User not found",
//       });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({
//         status: "error",
//         message: "Invalid password",
//       });
//     }

//     const token = jwt.sign(
//       { email: user.email, id: user._id },
//       jwtSecret, // Using the imported jwtSecret
//       { expiresIn: "24h" }
//     );

//     res.status(200).json({
//       status: "success",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       status: "error",
//       message: "Server error occurred",
//     });
//   }
// });

// Add a new route to get user profile

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: "error",
        message: "Invalid password",
      });
    }

    // ... JWT token creation ...

    res.status(200).json({
      status: "success",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    // ...
  }
});

app.get("/profile", authenticateToken, async (req, res) => {
  try {
    const user = req.user;
    // Get user's properties
    const properties = await Property.find({ email: user.email });

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      properties,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching profile" });
  }
});

app.post("/NewProperty", upload.array("images", 5), async (req, res) => {
  const { name, type, price, location, discount, description, email } =
    req.body;

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "At least one image is required." });
  }

  if (req.files.length > 5) {
    return res.status(400).json({ error: "Maximum 5 images allowed." });
  }

  try {
    const newProperty = new Property({
      name,
      type,
      price,
      location,
      discount,
      description,
      email,
      images: req.files.map((file) => ({
        data: file.buffer,
        contentType: file.mimetype,
      })),
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    console.error("Error saving property:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Update the image route to handle multiple images
app.get("/images/:id/:index", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    const imageIndex = parseInt(req.params.index) || 0;

    if (!property || !property.images || !property.images[imageIndex]) {
      return res.status(404).json({ error: "Image not found" });
    }

    const image = property.images[imageIndex];
    const contentType = image.contentType;

    if (!contentType || !/^image\/(png|jpeg|jpg|webp)$/.test(contentType)) {
      throw new Error("Invalid media type");
    }

    res.set("Content-Type", contentType);
    res.send(image.data);
  } catch (err) {
    console.error("Error fetching image:", err.message);
    res.status(500).json({ error: "Failed to fetch image" });
  }
});

app.get("/property", async (req, res) => {
  const { location, type } = req.query;

  try {
    let filter = {};
    if (location && location.trim() !== "") {
      filter.location = { $regex: location.trim(), $options: "i" };
    }
    if (type && type.trim() !== "") {
      filter.type = { $regex: `^${type.trim()}$`, $options: "i" };
    }

    const properties = await Property.find(filter);
    res.status(200).json(properties);
  } catch (err) {
    console.error("Error fetching properties:", err.message);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});

app.post("/property/:id/rate", async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;

  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Add the new rating to the reviews array with a default comment
    property.reviews.push({
      rating,
      comment: "User rating", // Adding default comment to satisfy schema requirement
      createdAt: new Date(),
    });

    // Calculate and update the average rating
    const totalRatings = property.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    property.rating = totalRatings / property.reviews.length;

    await property.save();
    res.json({ success: true, newRating: property.rating });
  } catch (error) {
    console.error("Error updating rating:", error);
    res.status(500).json({ error: "Failed to update rating" });
  }
});

// Add this route in index.js

// Get single property details
app.get("/property/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        status: "error",
        message: "Property not found",
      });
    }

    res.json({
      status: "success",
      property,
    });
  } catch (error) {
    console.error("Error fetching property:", error);
    res.status(500).json({
      status: "error",
      message: "Error loading property details",
    });
  }
});

// backend/index.js

// Add to your existing routes

// Booking Route
app.post("/property/:id/book", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut, message } = req.body;
    const userId = req.user.id;

    const booking = new Booking({
      property: id,
      user: userId,
      checkIn,
      checkOut,
      message,
      status: "pending",
    });

    await booking.save();

    // Send email notification to property owner (you'll need to implement this)

    res.status(201).json({
      status: "success",
      booking,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// Review Route
app.post("/property/:id/review", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.id;

    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Check if user has already reviewed
    const existingReview = property.reviews.find(
      (review) => review.user.toString() === userId
    );

    if (existingReview) {
      return res
        .status(400)
        .json({ error: "You've already reviewed this property" });
    }

    property.reviews.push({
      user: userId,
      rating,
      comment,
      createdAt: new Date(),
    });

    await property.save();

    res.json({
      status: "success",
      reviews: property.reviews,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to add review" });
  }
});

// Favorite Route
app.post("/property/:id/favorite", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const user = await User.findById(userId);

    const isFavorite = user.favorites.includes(id);

    if (isFavorite) {
      user.favorites = user.favorites.filter(
        (favId) => favId.toString() !== id
      );
    } else {
      user.favorites.push(id);
    }

    await user.save();

    res.json({
      status: "success",
      isFavorite: !isFavorite,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update favorites" });
  }
});

// Check if property is favorited

// Add to index.js
app.post("/review/:id/helpful", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const property = await Property.findOne({ "reviews._id": id });
    if (!property) {
      return res.status(404).json({ error: "Review not found" });
    }

    const review = property.reviews.id(id);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    // Increment helpful count
    review.helpfulCount = (review.helpfulCount || 0) + 1;
    await property.save();

    res.json({
      status: "success",
      helpfulCount: review.helpfulCount,
    });
  } catch (error) {
    console.error("Error marking review as helpful:", error);
    res.status(500).json({ error: "Failed to mark review as helpful" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
