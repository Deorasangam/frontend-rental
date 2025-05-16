// src/components/FilterSection.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PropTypes from "prop-types";

const FilterSection = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedPriceButton, setSelectedPriceButton] = useState(null);
  const [minRating, setMinRating] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);

  const amenitiesList = [
    "WiFi",
    "TV",
    "Air Conditioning",
    "Kitchen",
    "Parking",
    "Gym",
    "Security",
    "Garden",
    "Furniture",
    "Washing Machine",
    "Balcony",
    "Heating",
  ];

  const handlePriceRangeChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
    setSelectedPriceButton(null);
    onFilterChange({ type: "price", value: newRange });
  };

  const handlePriceButtonClick = (range) => {
    setSelectedPriceButton(range.label);
    setPriceRange([range.min, range.max]);
    onFilterChange({ type: "price", value: [range.min, range.max] });
  };

  const handleRatingChange = (rating) => {
    setMinRating(rating);
    onFilterChange({ type: "rating", value: rating });
  };

  const handleAmenityToggle = (amenity) => {
    const newAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(newAmenities);
    onFilterChange({ type: "amenities", value: newAmenities });
  };

  const priceButtons = [
    { label: "Low", min: 0, max: 2000 },
    { label: "Medium", min: 2001, max: 5000 },
    { label: "High", min: 5000, max: 10000 },
  ];

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow space-y-6 sticky top-0">
      {/* Price Filter Section */}
      <div>
        <button
          className="flex items-center justify-between w-full font-semibold mb-4"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          Price Range
          {isPriceOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isPriceOpen && (
          <div className="space-y-4">
            <div className="flex gap-2">
              {priceButtons.map((button) => (
                <button
                  key={button.label}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedPriceButton === button.label
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handlePriceButtonClick(button)}
                >
                  {button.label}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{priceRange[0]}</span>
                <span>{priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 0)}
                className="w-full accent-purple-600"
              />
              <input
                type="range"
                min="0"
                max="50000"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e, 1)}
                className="w-full accent-purple-600"
              />
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter Section */}
      <div>
        <button
          className="flex items-center justify-between w-full font-semibold mb-4"
          onClick={() => setIsRatingOpen(!isRatingOpen)}
        >
          Minimum Rating
          {isRatingOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isRatingOpen && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                className={`flex items-center w-full p-2 rounded ${
                  minRating === rating ? "bg-purple-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleRatingChange(rating)}
              >
                <div className="flex">
                  {[...Array(rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2">& Up</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Amenities Filter Section */}
      <div>
        <button
          className="flex items-center justify-between w-full font-semibold mb-4"
          onClick={() => setIsAmenitiesOpen(!isAmenitiesOpen)}
        >
          Amenities
          {isAmenitiesOpen ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {isAmenitiesOpen && (
          <div className="space-y-2">
            {amenitiesList.map((amenity) => (
              <label
                key={amenity}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedAmenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Add PropTypes validation
FilterSection.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterSection;
