// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function NewProperty() {
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [discount, setDiscount] = useState("");
//   const [description, setDescription] = useState("");
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("type", type);
//     formData.append("price", price);
//     formData.append("location", location);
//     formData.append("discount", discount);
//     formData.append("description", description);
//     formData.append("email", email);
//     formData.append("image", image);

//     try {
//       await axios.post("http://localhost:5000/NewProperty", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       toast.success("Property added successfully!");
//       navigate("/view");
//     } catch (error) {
//       toast.error("Failed to add property.");
//       console.error("Error adding property:", error);
//     }
//   };

//   return (
//     <div>
//     <div className="flex flex-row w-xl w-full">

//     <div className="flex-auto">
//       <div className="flex flex-col">
//         <div className="flex flex-col bg-white shadow-lg">
//           <div className="flex flex-row space-x-3">
//             <h4 className="font-bold text-gray-500 p-1 pl-2">Property</h4>
//           </div>
//           <p className="text-gray-400 p-1 pl-2">
//           Add New
//           </p>
//         </div>
//         <div className="min-h-screen bg-blue-50 px-80">

//           <div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
//             <div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
//             <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
//             <h1 className="font-medium text-lg text-center">Add New Property</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Input Fields */}
//         <label className="block text-sm font-medium text-gray-700"></label>
//           Property Name
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-3 border rounded-md"
//           placeholder="Property Name"
//           required
//         />
//         <label className="block text-sm font-medium text-gray-700">
//           Property Type
//         </label>
//         <input
//           name="type"
//           placeholder="House , Apartment, Room, PG, Hostel"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="w-full p-3 border rounded-md"
//           required
//         />
//         <label className="block text-sm font-medium text-gray-700">
//           Price per month ($)
//         </label>
//         <input
//           type="number"
//           name="price"
//           placeholder="Price per month"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full p-3 border rounded-md"
//           required
//         />
//         <label className="block text-sm font-medium text-gray-700">
//           Location
//         </label>
//         <input
//           type="text"
//           name="location"
//           placeholder="location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="w-full p-3 border rounded-md"
//           required
//         />
//         <label className="block text-sm font-medium text-gray-700"></label>
//         Discount
//         <input
//           type="number"
//           name="contactEmail"
//           placeholder="discount"
//           value={discount}
//           onChange={(e) => setDiscount(e.target.value)}
//           className="w-full p-3 border rounded-md"
//           //required
//         />
//         <label className="block text-sm font-medium text-gray-700"></label>
//         Description
//         <textarea
//           type="text"
//           name="Description"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-3 border rounded-md"
//           required
//         />
//         <label className="block text-sm font-medium text-gray-700"></label>
//         Email
//         <input
//           type="email"
//           name="email"
//           placeholder=" email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 border rounded-md"
//           required
//         />
//         {/* Other Fields */}
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           accept="image/*"
//           className="w-full p-3 border rounded-md"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300"
//         >
//           Add Property
//         </button>
//       </form>
//     </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   );
// }

// export default NewProperty;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function NewProperty() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState([]);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      toast.error("Maximum 5 images allowed");
      e.target.value = null;
      return;
    }
    setImage(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("discount", discount);
    formData.append("description", description);
    formData.append("email", email);
    //formData.append("image", image);

    image.forEach((image, index) => {
      formData.append("images", image);
    });

    //   try {
    //     await axios.post("http://localhost:5000/NewProperty", formData, {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });
    //     toast.success("Property added successfully!");
    //     navigate("/Main01");
    //   } catch (error) {
    //     toast.error("Failed to add property.");
    //     console.error("Error adding property:", error);
    //   }
    // };
    try {
      await axios.post("http://localhost:5000/NewProperty", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Property added successfully!");
      navigate("/view");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add property.");
      console.error("Error adding property:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md absolute inset-x-0 top-20">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Fields */}
        <label className="block text-sm font-medium text-gray-700">
          Property Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Property Name"
          required
        />
        <label className="block text-sm font-medium text-gray-700">
          Property Type
        </label>
        <input
          name="type"
          placeholder="House , Apartment, Room, PG, Hostel"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 border rounded-md"
          required
        />
        <label className="block text-sm font-medium text-gray-700">
          Price per month ($)
        </label>
        <input
          type="number"
          name="price"
          placeholder="Price per month"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 border rounded-md"
          required
        />
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          name="location"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border rounded-md"
          required
        />
        <label className="block text-sm font-medium text-gray-700"></label>
        discount
        <input
          type="number"
          name="contactEmail"
          placeholder="discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="w-full p-3 border rounded-md"
          //required
        />
        <label className="block text-sm font-medium text-gray-700"></label>
        Description
        <textarea
          type="text"
          name="Description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded-md"
          required
        />
        <label className="block text-sm font-medium text-gray-700"></label>
        Email
        <input
          type="email"
          name="email"
          placeholder=" email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-md"
          required
        />
        {/* Other Fields */}
        {/* <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          required
        /> */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Property Images (Max 5)
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            multiple
            required
            className="w-full p-2 border rounded-md"
          />
          <p className="text-sm text-gray-500">
            Selected images: {image.length}/5
          </p>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300"
        >
          Add Property
        </button>
      </form>
    </div>
  );
}

export default NewProperty;
