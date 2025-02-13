import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  async function handlelogin(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        // Store the token in localStorage for future authenticated requests
        localStorage.setItem("token", response.data.token);

        toast.success("Login successful", {
          position: "top-center",
        });
        navigator("/");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      toast.error(errorMessage, {
        position: "top-center",
      });
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mt-[120px] w-[390px]">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handlelogin}>
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
          <ToastContainer />
          <div className="text-center mt-4 text-gray-500">
            Do not have an account?{" "}
            <Link className="underline text-black" to={"/Register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
