import React, { useState } from "react";
import { auth, db } from "./firebaseConfig/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Loader from "./loaders"; // Assuming this is your loader component
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // New phone state
  const [bloodGroup, setBloodGroup] = useState(""); // New blood group state
  const navigate = useNavigate();

  const signUpDatabase = () => {
    if (email !== "" && password !== "" && name !== "" && phone !== "" && bloodGroup !== "") {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          const uid = res.user.uid;
          localStorage.setItem("user", uid);
          const userData = { email, uid, name, phone, bloodGroup }; // Storing phone and blood group
          console.log("User data saved", userData);
          await setDoc(doc(db, "users", uid), userData);
          setEmail("");
          setPassword("");
          setName("");
          setPhone(""); // Clear the phone input
          setBloodGroup(""); // Clear the blood group input
          navigate("/home"); // Redirect to home after successful signup
        })
        .catch((error) => {
          alert("Error: " + error.message);
          setIsLoading(false);
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="w-full h-[100vh] bg-teal-700 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-teal-700">Sign Up</h2>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="tel"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          placeholder="Enter Blood Group"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <button
            onClick={signUpDatabase}
            className="w-full bg-teal-500 text-white py-2 rounded-lg font-bold hover:bg-teal-600"
          >
            Sign Up
          </button>
        )}
        <div className="mt-4 text-center">
          <Link to="/" className="text-teal-600 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
