import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { StarIcon, MapPinIcon } from "lucide-react";

const Main01 = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [ratings, setRatings] = useState({});
  const [hoveredRatings, setHoveredRatings] = useState({});

  const handleStarClick = async (propertyId, rating) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/property/${propertyId}/rate`,
        {
          rating: rating,
          comment: "User rating", // Adding default comment
        }
      );

      if (response.data.success) {
        setRatings((prev) => ({
          ...prev,
          [propertyId]: rating,
        }));

        setProperties((prevProperties) =>
          prevProperties.map((property) =>
            property._id === propertyId
              ? {
                  ...property,
                  reviews: [
                    ...(property.reviews || []),
                    { rating, comment: "User rating", createdAt: new Date() },
                  ],
                }
              : property
          )
        );
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  // Rest of the component remains the same
  useEffect(() => {
    const fetchProperties = async () => {
      const searchParams = new URLSearchParams(location.search);
      const locationQuery = searchParams.get("location");
      const typeQuery = searchParams.get("type");

      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/property", {
          params: {
            location: locationQuery,
            type: typeQuery,
          },
        });

        const filteredProperties = typeQuery
          ? response.data.filter(
              (property) =>
                property.type.toLowerCase() === typeQuery.toLowerCase()
            )
          : response.data;

        setProperties(filteredProperties);
      } catch (err) {
        console.error("Error fetching properties:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [location.search]);

  return (
    <div className="w-full flex flex-wrap bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div
              key={property._id}
              className="border bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <Link to={`/property/${property._id}`} className="block">
                <div className="relative">
                  {/* <img
                    src={`http://localhost:5000/images/${property._id}`}
                    alt={property.name || "Property Image"}
                    className="w-full h-40 object-cover"
                    onError={(e) => (e.target.src = "/placeholder.jpg")}
                  /> */}

                  <img
                    src={`http://localhost:5000/images/${property._id}/0`} // Added /0 to get first image
                    alt={property.name || "Property Image"}
                    className="w-full h-40 object-cover"
                    onError={(e) => (e.target.src = "/placeholder.jpg")}
                  />
                  {property.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                      {property.discount}% OFF
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800">
                    {property.name}
                  </h2>

                  <div className="flex items-center mt-2">
                    <MapPinIcon className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 text-gray-600 text-sm">
                      {property.location}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-semibold text-purple-600">
                      ${property.price}/month
                    </span>
                  </div>
                </div>
              </Link>

              <div className="px-4 pb-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={(e) => {
                        e.preventDefault();
                        handleStarClick(property._id, star);
                      }}
                      onMouseEnter={() =>
                        setHoveredRatings((prev) => ({
                          ...prev,
                          [property._id]: star,
                        }))
                      }
                      onMouseLeave={() =>
                        setHoveredRatings((prev) => ({
                          ...prev,
                          [property._id]: 0,
                        }))
                      }
                      className="focus:outline-none"
                    >
                      <StarIcon
                        className={`w-5 h-5 cursor-pointer transition-colors ${
                          star <=
                          (hoveredRatings[property._id] ||
                            ratings[property._id] ||
                            0)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-700">
                    {property.reviews?.length || 0} reviews
                  </span>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link to={`/property/${property._id}`}>
                  <button
                    type="button"
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 w-full">
            No properties found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Main01;
