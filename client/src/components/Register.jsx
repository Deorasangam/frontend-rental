import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Add this import for the CSS

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post("https://backend-henna-gamma.vercel.app/Register", {
        name,
        email,
        password,
      });

      toast.success("Registration successful", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Navigate after a short delay to allow the toast to be seen
      setTimeout(() => {
        navigator("/login");
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  return (
    <div className="mt-4  grow flex items-center justify-around">
      <div className="mt-[120px] w-[390px] ">
        <h1 className="text-3xl text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-pink-700 text-center">
          Register
        </h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="primary">Register</button>

          <div className="text-center py-2 text-gray-500">
            Already a member?
            <Link className="underline text-black" to={"/Login"}>
              Login{" "}
            </Link>
          </div>
        </form>
      </div>

      {/* Place ToastContainer outside of the form */}
      <ToastContainer />
    </div>
  );
}

export default Register;
