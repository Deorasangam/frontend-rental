import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function NewProperty() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  //const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("startDate", startDate);
    formData.append("enddate", endDate);

    try {
      await axios.post("http://localhost:5000/booking", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Property added successfully!");
      navigate("/booking");
    } catch (error) {
      toast.error("Failed to add property.");
      console.error("Error adding property:", error);
    }
  };

  return (
    <div>
    <div className="flex flex-row w-xl w-full">
    
    <div className="flex-auto">
      <div className="flex flex-col">
        <div className="flex flex-col bg-white shadow-lg">
          <div className="flex flex-row space-x-3">
            <h4 className="font-bold text-gray-500 p-1 pl-2">Property</h4>
          </div>
          <p className="text-gray-400 p-1 pl-2">
          Add New
          </p>
        </div>
        <div className="min-h-screen bg-blue-50 px-80">
          
          <div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
            <div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
            <h1 className="font-medium text-lg text-center">New Booking</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Fields */}
        <label className="block text-sm font-medium text-gray-700"></label>
          Name
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-3 border rounded-md"
          placeholder="Username"
          required
        />
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-md"
          required
        />
        <label className="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          type="number"
          name="Phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border rounded-md"
          required
        />
        <label className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="Date"
          name="startdate"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-3 border rounded-md"
          required
        />
        <label className="block text-sm font-medium text-gray-700"></label>
        End Date
        <input
          type="date"
          name="startdate"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-3 border rounded-md"
          //required
        />
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300"
        >
          Add Property
        </button>
      </form>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default NewProperty;
