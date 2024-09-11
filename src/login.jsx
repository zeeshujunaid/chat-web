import React, { useState } from "react";
import { auth } from "./firebaseConfig/firebase"; // Make sure your firebase config is correctly imported
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./loaders"; // Placeholder for your loader component

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginToDatabase = () => {
    if (email !== "" && password !== "") {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const uid = userCredential.user.uid;
          console.log("UID saved in localStorage", uid);
          localStorage.setItem("user", uid);
          navigate("/home");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          alert("Error: " + error.message);
          setIsLoading(false);
        });
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="w-full h-[100vh] bg-gray-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>
        <input
          type="email"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          placeholder="Enter Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoading ? (
          <Loader /> // Show loader while loading
        ) : (
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600"
            onClick={loginToDatabase}
          >
            Login
          </button>
        )}
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-blue-600 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
