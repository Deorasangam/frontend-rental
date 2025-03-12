import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const index = () => {
  const [systemDate, setSystemDate] = useState("");

  // Function to fetch the system date from backend
  const fetchSystemDate = async () => {
    try {
      const response = await axios.get("http://localhost:5000/system-date");
      setSystemDate(response.data.currentDate);
    } catch (error) {
      console.error("Error fetching system date:", error);
    }
  };

  useEffect(() => {
    fetchSystemDate(); // Fetch system date when the component mounts
  }, []);

  //---------------------------------Count--------------------------------

  const [propertyCount, setPropertyCount] = useState(0);

  // Fetch property count on component mount
  useEffect(() => {
    const fetchPropertyCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/properties/count"
        );
        setPropertyCount(response.data.count); // Set the count from backend
      } catch (error) {
        console.error("Error fetching property count:", error);
      }
    };

    fetchPropertyCount();
  }, []);

  //---------------------------------Count End--------------------------------

  return (
    <div className="flex flex-row w-440">
      <div className="absolute inset-x-0 top-20">
        <div className="flex flex-col">
          <div className="flex flex-col bg-white">
            <div className="flex flex-row space-x-3">
              <h4 className="font-bold text-gray-500 p-1 pl-2">Dashboard</h4>
            </div>
            <p className="text-gray-400 p-1 pl-2">
              {new Date(systemDate).toLocaleString()}
            </p>
          </div>
          <div className="min-h-screen bg-blue-50 w-full w-500 px-9">
            <div className="mt-8 grid gap-4 lg:grid-cols-3 sm-grid-cols p-3">
              <div className="flex item-center bg-white rounded shadow-sm justify-between p-5">
                <div>
                  <div className="text-sm text-gray-400">Check out Today</div>

                  <div className="text-3xl font-medium text-gray-600">21</div>
                </div>
                <div className="text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex item-center bg-white rounded shadow-sm justify-between p-5">
                <div>
                  <div className="text-sm text-gray-400">Today</div>

                  <div className="text-3xl font-medium text-gray-600">45</div>
                </div>
                <div className="text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex item-center bg-white rounded shadow-sm justify-between p-5">
                <Link to="/view">
                  <div>
                    <div className="text-sm text-gray-400">
                      Total Properties
                    </div>

                    <div className="text-3xl font-medium text-gray-600">
                      {propertyCount}
                    </div>
                  </div>
                </Link>
                <div className="text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-3 p-4 gap-3">
              <div className="col-span-2 bg-white p-8 flex-col rounded shadow-sm">
                <b className="flex flex-row text-gray-500">
                  Property Realease Today
                </b>
                <canvas className="p-5" id="chartLine"></canvas>
              </div>
              <div className="flex flex-col p-8 bg-white rounded shadow-sm">
                <b className="flex flex-row text-gray-500">
                  Occupancy Percentage
                </b>
                <canvas className="p-5" id="chartRadar"></canvas>
              </div>
            </div>

            <div className="p-4 font-bold text-gray-600">clients</div>
            <div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
              <div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
                <table>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                      >
                        Name
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
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"
                              alt="..."
                            ></img>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Vikash sharma
                            </div>
                            <div className="text-sm text-gray-500">
                              vikash@email.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap"></td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                        Customer
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href=""
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;

// New code
// import React, { useState, useEffect } from "react";
// import { Outlet, Link, useNavigate } from "react-router-dom"; // Added useNavigate for auth redirects
// import axios from "axios";
// import PropTypes from "prop-types";
// import { LogOut } from "lucide-react"; // Import LogOut icon

// const Index = () => {
//   // State management
//   const [systemDate, setSystemDate] = useState("");
//   const [propertyCount, setPropertyCount] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // New auth state
//   const navigate = useNavigate();

//   // Check authentication status on mount
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/login");
//           return;
//         }

//         // Verify token with backend
//         const response = await axios.get("http://localhost:5000/verify-token", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setIsAuthenticated(true);
//       } catch (err) {
//         console.error("Auth error:", err);
//         navigate("/login");
//       }
//     };

//     checkAuth();
//   }, [navigate]);

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//     navigate("/login");
//   };

//   // Fetch dashboard data
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         setLoading(true);
//         const [dateResponse, countResponse] = await Promise.all([
//           axios.get("http://localhost:5000/system-date"),
//           axios.get("http://localhost:5000/properties/count"),
//         ]);

//         setSystemDate(dateResponse.data.currentDate);
//         setPropertyCount(countResponse.data.count);
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching dashboard data:", err);
//         setError("Failed to load dashboard data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isAuthenticated) {
//       fetchDashboardData();
//     }
//   }, [isAuthenticated]);

//   // Loading state component
//   if (loading) {
//     return (
//       <div className="min-h-screen w-full flex items-center justify-center bg-blue-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   // Error state component
//   if (error) {
//     return (
//       <div className="min-h-screen w-full flex items-center justify-center bg-blue-50">
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <p className="text-red-500">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Reusable card component
//   const DashboardCard = ({ title, value, icon, linkTo }) => {
//     const Card = linkTo ? Link : "div";
//     return (
//       <Card
//         to={linkTo}
//         className="flex items-center bg-white rounded-lg shadow-sm justify-between p-5 hover:shadow-md transition-shadow"
//       >
//         <div>
//           <div className="text-sm text-gray-400">{title}</div>
//           <div className="text-2xl sm:text-3xl font-medium text-gray-600">
//             {value}
//           </div>
//         </div>
//         <div className="text-pink-500">{icon}</div>
//       </Card>
//     );
//   };

//   DashboardCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     icon: PropTypes.node.isRequired,
//     linkTo: PropTypes.string,
//   };

//   return (
//     // Modified to ensure full-screen width
//     <div className="min-h-screen w-full bg-blue-50">
//       <div className="w-full h-full">
//         {/* Header with Logout */}
//         <div className="bg-white shadow-sm w-full">
//           <div className="flex justify-between items-center p-4">
//             <div>
//               <h4 className="font-bold text-gray-500">Dashboard</h4>
//               <p className="text-gray-400">
//                 {new Date(systemDate).toLocaleString()}
//               </p>
//             </div>
//             {/* Added Logout button */}
//             <button
//               onClick={handleLogout}
//               className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//             >
//               <LogOut className="w-4 h-4 mr-2" />
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* Main content area - full width */}
//         <div className="p-6 w-full">
//           {/* Dashboard Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//             <DashboardCard
//               title="Check out Today"
//               value="21"
//               icon={
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                   />
//                 </svg>
//               }
//             />

//             <DashboardCard
//               title="Today"
//               value="45"
//               icon={
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                   />
//                 </svg>
//               }
//             />

//             <DashboardCard
//               title="Total Properties"
//               value={propertyCount}
//               linkTo="/view"
//               icon={
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//                   />
//                 </svg>
//               }
//             />
//           </div>

//           {/* Charts Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
//             <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
//               <h3 className="text-gray-500 font-bold mb-4">
//                 Property Release Today
//               </h3>
//               <canvas id="chartLine" className="w-full"></canvas>
//             </div>

//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <h3 className="text-gray-500 font-bold mb-4">
//                 Occupancy Percentage
//               </h3>
//               <canvas id="chartRadar" className="w-full"></canvas>
//             </div>
//           </div>

//           {/* Clients Table */}
//           <div className="bg-white rounded-lg shadow-sm mb-6">
//             <div className="p-4 border-b">
//               <h3 className="font-bold text-gray-600">Clients</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Title
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Status
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Role
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   <tr>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-10 w-10">
//                           <img
//                             className="h-10 w-10 rounded-full"
//                             src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"
//                             alt="Profile"
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">
//                             Vikash sharma
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             vikash@email.com
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap"></td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                         Active
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       Customer
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <button className="text-indigo-600 hover:text-indigo-900">
//                         Edit
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index; // Changed export name to Index
