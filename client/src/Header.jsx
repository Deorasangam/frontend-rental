import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/AuthContext"; // Add this import

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Add this line to use authentication context

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?location=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    } else {
      alert("Please enter a valid location.");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMenuOpen(false);
  };

  return (
    <header className="relative p-2 sm:p-4 flex flex-wrap items-center justify-between border rounded-t-md border-gray-500 w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-400 transition-all">
          RentEase
        </span>
      </Link>

      {/* Search Bar - Desktop */}
      <div className="hidden md:flex items-center w-[300px] h-[50px] rounded-full p-1 border-2 border-gray-500 hover:border-blue-800 active:border-blue-800 focus:outline-none focus:ring focus:ring-blue-300">
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none p-1 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white p-2 rounded-full ml-1 border-2 border-gray-300 hover:border-blue-800 active:border-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white h-5"
          >
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Right Section */}
      <div className="md:hidden flex items-center gap-2">
        {/* Search Icon - Mobile */}
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="md:hidden flex items-center border border-gray-300 rounded-full p-2 shadow-md shadow-gray-300 hover:border-blue-800 active:border-blue-800 focus:outline-none focus:ring focus:ring-blue-300 bg-purple-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center border border-gray-300 rounded-full py-2 px-4 gap-2 shadow-md shadow-gray-300"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 relative top-1"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        {user && ( // Only show Add Property when user is logged in
          <Link
            to="/NewProperty"
            className="bg-purple-600 text-white p-2 rounded-lg w-[150px] text-center"
          >
            Add Property
          </Link>
        )}

        {/* User Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center border border-gray-300 rounded-full py-2 px-4 gap-2 shadow-md shadow-gray-300"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 relative top-1"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Mobile Search Input */}
      {isSearchOpen && (
        <div className="w-full md:hidden mt-2 px-2">
          <div className="flex items-center h-[50px] rounded-full p-1 border-2 border-gray-500">
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none p-1 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-purple-600 text-white p-2 rounded-full ml-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white h-5"
              >
                <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Dropdown Menu (Mobile & Desktop) */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {user ? (
              <>
                <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-200">
                  {user.name}
                </div>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/NewProperty"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-100 md:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Add Property
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-purple-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
