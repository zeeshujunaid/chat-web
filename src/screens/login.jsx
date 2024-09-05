import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="animate-pulse w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-30 absolute top-10 left-20 blur-3xl"></div>
        <div className="animate-pulse w-80 h-80 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-full opacity-30 absolute bottom-10 right-10 blur-3xl"></div>
      </div>

      {/* Login Box */}
      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800">
        <h2 className="text-4xl font-extrabold text-center text-white">Login to Chat</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
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
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 mt-1 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="w-4 h-4 text-blue-400 border-gray-700 rounded focus:ring-blue-400"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-400">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
