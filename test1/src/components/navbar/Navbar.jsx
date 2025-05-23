// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if user is logged in on component mount
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   return (
//     <div>
//       <nav className="bg-gray-800 w-xl w-full">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex h-16 items-center justify-between">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               <button
//                 type="button"
//                 className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="absolute -inset-0.5"></span>
//                 <span className="sr-only">Open main menu</span>

//                 <svg
//                   className="block size-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   width="1.5"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   data-slot="icon"
//                 >
//                   <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>

//                 <svg
//                   className="hidden size-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   width="1.5"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   data-slot="icon"
//                 >
//                   <path d="M6 18 18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <Link to="/">
//                 <div className="flex shrink-0 items-center">
//                   <img
//                     className="h-8 w-auto"
//                     src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"
//                     alt="Your Company"
//                   />
//                 </div>
//               </Link>
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-4">
//                   <Link
//                     to="/"
//                     className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
//                     aria-current="page"
//                   >
//                     Dashboard
//                   </Link>
//                   <Link
//                     to="/booking"
//                     className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                   >
//                     Booking
//                   </Link>
//                   <Link
//                     to="/NewProperty"
//                     className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                   >
//                     Add New
//                   </Link>
//                   <Link
//                     to="/view"
//                     className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                   >
//                     View Property
//                   </Link>
//                   <Link
//                     to="/review"
//                     className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                   >
//                     Review
//                   </Link>
//                   <Link
//                     to="/reviewfrom"
//                     className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                   >
//                     UserBook
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//               <button
//                 type="button"
//                 className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
//               >
//                 <span className="absolute -inset-1.5"></span>
//                 <span className="sr-only">View notifications</span>
//                 <svg
//                   className="size-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   width="1.5"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   data-slot="icon"
//                 >
//                   <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
//                 </svg>
//               </button>

//               <div className="relative ml-3">
//                 {isLoggedIn ? (
//                   <button
//                     onClick={handleLogout}
//                     className="rounded-md px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                   >
//                     Logout
//                   </button>
//                 ) : (
//                   <button
//                     onClick={handleLogin}
//                     className="rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Login
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if user is logged in on component mount
  //   const token = localStorage.getItem("token");
  //   setIsLoggedIn(!!token);
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   navigate("/");
  // };

  // const handleLogin = () => {
  //   setIsLoggedIn(false);
  //   navigate("/login");
  // };
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // // Listen for storage changes (when token is set or removed in different components)
  // useEffect(() => {
  //   const checkAuth = () => {
  //     setIsLoggedIn(!!localStorage.getItem("token"));
  //   };

  //   window.addEventListener("storage", checkAuth);
  //   return () => window.removeEventListener("storage", checkAuth);
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   navigate("/");
  // };

  // const handleLogin = () => {
  //   navigate("/login");
  // };
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Listen for storage changes (when token is set or removed in different components)
  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <nav className="bg-gray-800 w-xl w-full">
        <div className=" bg-gray-800 absolute inset-x-0 top-0 pl-6">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/">
                <div className="flex shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"
                    alt="Your Company"
                  />
                </div>
              </Link>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/booking"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Booking
                  </Link>
                  <Link
                    to="/NewProperty"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Add New
                  </Link>
                  <Link
                    to="/view"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    View Property
                  </Link>
                  <Link
                    to="/review"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Review
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>

              {/* <div className="relative ml-3">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Login
                  </button>
                )}
              </div> */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
