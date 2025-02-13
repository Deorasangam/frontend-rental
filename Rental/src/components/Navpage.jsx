// //import { Link } from "react-router-dom";
// ///import { useNavigate } from "react-router-dom";
// //import { useState } from "react";

// const Navpage = () => {
//   return (
//     <div className="border rounded-t-md border-gray-300  bg-purple-500 text-white ">
//       {/* Container */}
//       <div className="flex p-2 mt-2  gap-3 text-center  items-center ">
//         {/* Home */}
//         <div className="  rounded-md  items-center p-2 ">
//           <img
//             className="h-[30px] "
//             src="https://cdn-icons-png.flaticon.com/128/738/738822.png"
//             alt="Home Icon"
//           />
//           <h3 className="text-sm font-medium">Home</h3>
//         </div>

//         {/* Hostel */}
//         <div className="  rounded-md  p-2 ">
//           <img
//             className="h-[30px] pl-1"
//             src="https://cdn-icons-png.flaticon.com/128/3619/3619368.png"
//             alt="Hostel Icon"
//           />
//           <h3 className="text-sm font-medium">Hostel</h3>
//         </div>

//         {/* PG */}
//         <div className="  rounded-md  p-2 ">
//           <img
//             className="h-[30px]"
//             src="https://cdn-icons-png.flaticon.com/128/10206/10206138.png"
//             alt="PG Icon"
//           />
//           <h3 className="text-sm font-medium">PG</h3>
//         </div>

//         {/* Rooms */}
//         <div className="  rounded-md  p-2 ">
//           <img
//             className="h-[30px] pl-1"
//             src="https://cdn-icons-png.flaticon.com/128/489/489870.png"
//             alt="Rooms Icon"
//           />
//           <h3 className="text-sm font-medium">Rooms</h3>
//         </div>

//         {/* Apartment */}
//         <div className="  rounded-md  p-2  ">
//           <img
//             className="h-[30px]   pl-4"
//             src="https://cdn-icons-png.flaticon.com/128/11036/11036127.png"
//             alt="Apartment Icon"
//           />
//           <h3 className="text-sm font-medium  ">Apartment</h3>
//         </div>

        
//       </div>
//     </div>
//   );
// };
// export default Navpage;
import { useNavigate } from "react-router-dom";

const Navpage = () => {
  const navigate = useNavigate();

  const handleTypeClick = (type) => {
    if (type === "Home") {
      navigate("/"); // Reset to show all properties
    } else {
      navigate(`/?type=${type.toLowerCase()}`);
    }
  };

  const navItems = [
    {
      type: "Home",
      icon: "https://cdn-icons-png.flaticon.com/128/738/738822.png",
    },
    {
      type: "Hostel",
      icon: "https://cdn-icons-png.flaticon.com/128/3619/3619368.png",
    },
    {
      type: "PG",
      icon: "https://cdn-icons-png.flaticon.com/128/10206/10206138.png",
    },
    {
      type: "Room",
      icon: "https://cdn-icons-png.flaticon.com/128/489/489870.png",
    },
    {
      type: "Apartment",
      icon: "https://cdn-icons-png.flaticon.com/128/11036/11036127.png",
    },
  ];

  return (
    <div className="border rounded-t-md border-gray-300 bg-purple-500 text-white">
      <div className="flex p-2 mt-2 gap-3 text-center items-center">
        {navItems.map((item) => (
          <div
            key={item.type}
            className="rounded-md p-2 cursor-pointer hover:bg-purple-600 transition-colors"
            onClick={() => handleTypeClick(item.type)}
          >
            <img
              className="h-[30px] mx-auto"
              src={item.icon}
              alt={`${item.type} Icon`}
            />
            <h3 className="text-sm font-medium">{item.type}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navpage;