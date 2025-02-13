// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Indexpage from "./components/Indexpage.jsx";
// import NewProperty from "./components/NewProperty";
// import Login from "./components/Login";
// import Layout from "./Layout";
// import Register from "./components/Register";
// import Navpage from "./components/Navpage";
// import Main01 from "./components/Main01";
// import Footer from "./components/Footer";
// import PropertyDetails from "./components/PropertyDetails";
// import { AuthProvider } from "./context/AuthContext";

// //import Left from "./components/Left";

// import axios from "axios";

// axios.defaults.baseURL = "http://127.0.0.1:5000";

// // axios.defaults.withCredentials=true;

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Indexpage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/NewProperty" element={<NewProperty />} />
//         <Route path="/Indexpage" element={<Indexpage />} />
//         <Route path="/Navpage" element={<Navpage />} />
//         <Route path="/Main01" element={<Main01 />} />
//         <Route path="search" element={<Main01 />} />
//         <Route path="/Footer" element={<Footer />} />
//         <Route path="/property/:id" element={<PropertyDetails />} />
//         <Route path="/profile" element={<Profile />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;




import { Routes, Route } from "react-router-dom";
import Indexpage from "./components/Indexpage.jsx";
import NewProperty from "./components/NewProperty";
import Login from "./components/Login";
import Layout from "./Layout";
import Register from "./components/Register";
import Navpage from "./components/Navpage";
import Main01 from "./components/Main01";
import Footer from "./components/Footer";

import Profile from "./components/Profile"; // Add this import
import { AuthProvider } from "./context/AuthContext";

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap Routes with AuthProvider */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/NewProperty" element={<NewProperty />} />
          <Route path="/Indexpage" element={<Indexpage />} />
          <Route path="/Navpage" element={<Navpage />} />
          <Route path="/Main01" element={<Main01 />} />
          <Route path="search" element={<Main01 />} />
          <Route path="/Footer" element={<Footer />} />

          <Route path="/profile" element={<Profile />} />
          
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
