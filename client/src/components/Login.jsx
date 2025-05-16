import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Add this import
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLogin(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-henna-gamma.vercel.app/login",
        {
          email,
          password,
        }
      );

      if (response.data.status === "success") {
        await login(response.data.token, response.data.user);

        toast.success("Login successful", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Add a slight delay before navigation to ensure toast is visible
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mt-[120px] w-[390px] ">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>

          <button className="primary">Login</button>

          <div className="text-center mt-4 text-gray-500">
            Do not have an account?{" "}
            <Link className="underline text-black" to={"/Register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>

      {/* Move ToastContainer outside the form */}
      <ToastContainer />
    </div>
  );
}

export default Login;
