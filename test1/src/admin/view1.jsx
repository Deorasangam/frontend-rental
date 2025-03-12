import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { StarIcon, MapPinIcon } from "lucide-react";

const Main01 = () => {
  const [properties, setProperties] = useState([]); // State for property data
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true); // Loading state
  const location = useLocation(); // For extracting query parameters

  // Fetch properties based on query parameters
  useEffect(() => {
    const fetchProperties = async () => {
      const searchParams = new URLSearchParams(location.search);
      const locationQuery = searchParams.get("location"); // Extract "location" query

      try {
        setLoading(true); // Start loading
        const response = await axios.get("http://localhost:5000/property", {
          params: { location: locationQuery },
        });
        setProperties(response.data); // Update property state
      } catch (err) {
        console.error("Error fetching properties:", err.message);
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProperties();
  }, [location.search]);

  // Render loading, error, or property data
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    
    <div className="bg-blue-50 px-60 min-h-screen">
        <div className="flex flex-col w-full">
        <div className="flex flex-col bg-white shadow-lg">
						<div className="flex flex-row space-x-3">
							<h4 className="font-bold text-gray-500 p-1 pl-2">Sattlement</h4>
						</div>
						<p className="text-gray-400 p-1 pl-2">
							Payments
						</p>
					</div>
                    </div>
    <div className="flex flex-wrap">
    <div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
    <div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
    <table>
		<thead><tr>
			<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
			<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
			<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">location</th>
			<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
			<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
			<th scope="col" className="relative px-6 py-3">
			<span className="sr-only">Edit</span></th>
		</tr></thead>
        <tbody>
        {properties.length > 0 ? (
        properties.map((property) => (
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div 
                    key={property._id}
                    className="flex items-center">
						<div className="flex-shrink-0 h-10 w-10">
							<img 
                            src={`http://localhost:5000/images/${property._id}`}
                            alt={property.name || "Property Image"}
                            onError={(e) => (e.target.src = "/placeholder.jpg")}
                            className="h-10 w-10 full"></img>
						</div>
						<div className="ml-4">
							<div className="text-sm font-medium text-gray-900">
                            
							</div>
						</div>
					</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {property.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {property.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {property.price}/month
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <a href="" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    <a href="" className="text-red-600 ml-2 hover:text-red-900">Delete</a>
                </td>
                
            </tr>
            ))) : (
                <div className="text-center text-gray-500 w-full">
                  No properties found.
                </div>
      )}
        </tbody> 
        </table>
    </div></div> 
    </div>
    </div>
  );
};

export default Main01;
