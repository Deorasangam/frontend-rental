

import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const View = ({ id }) => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const fetchProperties = async () => {
    const searchParams = new URLSearchParams(location.search);
    const locationQuery = searchParams.get("location");

    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/property", {
        params: { location: locationQuery },
      });
      setProperties(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [location.search]); // Added location.search as dependency

  const deleteProperty = async (propertyId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/properties/${propertyId}`);
        // Refresh the properties list after successful deletion
        fetchProperties();
      } catch (error) {
        setError("Failed to delete property. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="absolute inset-x-20 top-20">
        <div className="p-4 border-b">
          <h4 className="text-xl font-bold text-gray-700">Property List</h4>
          <p className="text-gray-500 mt-1">View and manage properties</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.length > 0 ? (
                properties.map((property) => (
                  <tr key={property._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            src={`http://localhost:5000/images/${property._id}/0`}
                            alt={property.name || "Property"}
                            onError={(e) => {
                              e.target.src = "/placeholder.jpg";
                              e.target.onerror = null;
                            }}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {property.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {property.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ₹{property.price}/month
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap space-x-4">
                      <Link
                        to={`/EditPage/${property._id}`}
                        className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteProperty(property._id)}
                        className="text-red-600 hover:text-red-900 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No properties found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

View.propTypes = {
  id: PropTypes.string,
};

export default View;
