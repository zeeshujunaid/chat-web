import React ,{useState} from "react";

function Singup() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  function handelsingup(e) {
    e.preventDefault()
    
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="animate-pulse w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-30 absolute top-10 left-20 blur-3xl"></div>
        <div className="animate-pulse w-80 h-80 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-full opacity-30 absolute bottom-10 right-10 blur-3xl"></div>
      </div>

      {/* Signup Box */}
      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800">
        <h2 className="text-4xl font-extrabold text-center text-white">Create Your Account</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Full Name
            </label>
            <input
            onChange={e=>setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 mt-1 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
            onChange={e=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 mt-1 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
            onChange={e=>setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 mt-1 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-400">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full px-4 py-3 mt-1 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handelsingup}
            className="w-full px-4 py-2 text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Singup;
