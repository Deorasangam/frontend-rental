

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [property, setProperty] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    discount: "",
    description: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/property/${id}`
        );
        if (response.data.status === "success") {
          setProperty(response.data.property);
        }
      } catch (error) {
        console.error("Error fetching property:", error);
        setError("Failed to fetch property details");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Create FormData object
      const formData = new FormData();

      // Append all property fields
      Object.keys(property).forEach((key) => {
        // Check if the value is not undefined or null
        if (property[key] != null) {
          formData.append(key, property[key]);
        }
      });

      // Append image if exists
      if (imageFile) {
        formData.append("image", imageFile);
      }

      // Log FormData contents for debugging
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      // Make the API call
      const response = await axios({
        method: "put",
        url: `http://localhost:5000/properties/${id}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // Add timeout and other configurations
        timeout: 5000,
        validateStatus: function (status) {
          return status >= 200 && status < 300;
        },
      });

      if (response.status === 200) {
        console.log("Property updated successfully:", response.data);
        navigate("/view");
      }
    } catch (error) {
      console.error("Detailed error information:", {
        message: error.message,
        code: error.code,
        response: error.response,
        request: error.request,
      });

      // Set appropriate error message
      if (error.code === "ERR_NETWORK") {
        setError(
          "Network error: Please check if the server is running and you're connected to the internet"
        );
      } else if (error.response) {
        setError(
          `Server error: ${
            error.response.data.message || "Unknown error occurred"
          }`
        );
      } else if (error.request) {
        setError("No response received from server. Please try again.");
      } else {
        setError(`Error updating property: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row w-xl w-full">
      <div className="flex-auto">
        <div className="flex flex-col">
          <div className="flex flex-col bg-white shadow-lg">
            <div className="flex flex-row space-x-3">
              <h4 className="font-bold text-gray-500 p-1 pl-2">Property</h4>
            </div>
            <p className="text-gray-400 p-1 pl-2">Update</p>
          </div>
          <div className="min-h-screen bg-blue-50 px-80">
            <div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
              <div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
                <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
                  <h1 className="font-medium text-lg text-center mb-6">
                    Update Property Details
                  </h1>

                  {/* Error Message Display */}
                  {error && (
                    <div
                      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                      role="alert"
                    >
                      <span className="block sm:inline">{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Rest of the form fields remain the same */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Property Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full p-3 border rounded-md"
                        value={property.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Property Type
                      </label>
                      <input
                        type="text"
                        name="type"
                        className="w-full p-3 border rounded-md"
                        value={property.type}
                        onChange={handleChange}
                        placeholder="House, Apartment, Room, PG, Hostel"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Price per month
                      </label>
                      <input
                        type="number"
                        name="price"
                        className="w-full p-3 border rounded-md"
                        value={property.price}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        className="w-full p-3 border rounded-md"
                        value={property.location}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Discount
                      </label>
                      <input
                        type="number"
                        name="discount"
                        className="w-full p-3 border rounded-md"
                        value={property.discount}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        name="description"
                        className="w-full p-3 border rounded-md"
                        value={property.description}
                        onChange={handleChange}
                        rows="4"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full p-3 border rounded-md"
                        value={property.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Property Image
                      </label>
                      {imagePreview && (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-32 h-32 object-cover mb-2"
                        />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-3 border rounded-md"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        loading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-pink-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                      }`}
                    >
                      {loading ? "Updating..." : "Save Changes"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;