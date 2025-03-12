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
