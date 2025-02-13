/*import { useState, useEffect } from "react";
import axios from "axios";

const Left = () => {
  const [maxPrice, setMaxPrice] = useState(500000); // Default maximum price
  const [properties, setProperties] = useState([]);

  // Function to fetch properties
  const fetchProperties = async (price) => {
    try {
      const response = await axios.post("http://localhost:5000/Left", {
        minPrice: 0,
        maxPrice: price,
      });
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // Effect to fetch properties dynamically as the slider changes
  useEffect(() => {
    fetchProperties(maxPrice);
  }, [maxPrice]);
  return (
    <div className="p-4 bg-gray-100 w-[15%]">
      <h2 className="text-xl font-semibold mb-4">Filter Properties</h2>
      {/* Single Pricing Bar
      <div className="flex flex-col">
        <label className="text-lg font-medium mb-2">Select Max Price</label>
        <div className="flex items-center justify-between text-gray-600">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
        <input
          type="range"
          min="0"
          max="5000000"
          value={maxPrice}
          className="w-full mt-2"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      //Display Filtered Properties
      <div className="mt-6">
        <h3 className="text-lg font-medium">Filtered Properties:</h3>
        {properties.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {properties.map((property) => (
              <li
                key={property._id}
                className="p-4 border rounded bg-white shadow"
              >
                <p>Name: {property.name}</p>
                <p>Price: ${property.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default Left;
*/

// import { useState } from "react";

// const Filters = () => {
//   const [priceRange, setPriceRange] = useState([0, 5000]);

//   return (
//     <aside className="w-64 p-4 border-r min-h-screen">
//       <div className="space-y-6">
//         {/* Property Type */}
//         <div>
//           <h3 className="font-semibold mb-3">Property Type</h3>
//           {["Hostel", "PG", "Apartment", "Room", "House"].map((type) => (
//             <div key={type} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 id={type}
//                 className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
//               />
//               <label htmlFor={type} className="ml-2 text-gray-700">
//                 {type}
//               </label>
//             </div>
//           ))}
//         </div>

//         {/* Price Range */}
//         <div>
//           <h3 className="font-semibold mb-3">Price Range</h3>
//           <div className="px-2">
//             {/* Temporary range input until Slider is properly installed */}
//             <div className="flex flex-col gap-2">
//               <input
//                 type="range"
//                 min={0}
//                 max={5000}
//                 value={priceRange[1]}
//                 onChange={(e) =>
//                   setPriceRange([priceRange[0], parseInt(e.target.value)])
//                 }
//                 className="w-full"
//               />
//               <div className="flex justify-between mt-2 text-sm text-gray-600">
//                 <span>${priceRange[0]}</span>
//                 <span>${priceRange[1]}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Rest of the component remains the same */}
//         {/* Review Score */}
//         <div>
//           <h3 className="font-semibold mb-3">Review Score</h3>
//           {[4, 3, 2, 1].map((score) => (
//             <div key={score} className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 id={`rating-${score}`}
//                 className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
//               />
//               <label htmlFor={`rating-${score}`} className="ml-2 text-gray-700">
//                 {score}+ Stars
//               </label>
//             </div>
//           ))}
//         </div>

//         {/* Discounts */}
//         <div>
//           <h3 className="font-semibold mb-3">Discounts</h3>
//           <div className="flex items-center mb-2">
//             <input
//               type="checkbox"
//               id="discounted"
//               className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
//             />
//             <label htmlFor="discounted" className="ml-2 text-gray-700">
//               Special Offers
//             </label>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Filters;

import { useState } from "react";

const Filters = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  return (
    <aside className="w-64 p-4 border-r min-h-screen">
      <div className="space-y-6">
        {/* Property Type */}
        <div>
          <h3 className="font-semibold mb-3">Property Type</h3>
          {["Hostel", "PG", "Apartment", "Room", "House"].map((type) => (
            <div key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={type}
                // onChange={() => handleCheckboxChange(type)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor={type} className="ml-2 text-gray-700">
                {type}
              </label>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Price Range</h3>
          <div className="px-2">
            {/* Temporary range input until Slider is properly installed */}
            <div className="flex flex-col gap-2">
              <input
                type="range"
                min={0}
                max={5000}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {/* Review Score */}
        <div>
          <h3 className="font-semibold mb-3">Review Score</h3>
          {[4, 3, 2, 1].map((score) => (
            <div key={score} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`rating-${score}`}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor={`rating-${score}`} className="ml-2 text-gray-700">
                {score}+ Stars
              </label>
            </div>
          ))}
        </div>

        {/* Discounts */}
        <div>
          <h3 className="font-semibold mb-3">Discounts</h3>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="discounted"
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="discounted" className="ml-2 text-gray-700">
              Special Offers
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
