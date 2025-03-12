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
