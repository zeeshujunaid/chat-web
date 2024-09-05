import React from "react";

function Loading ()  {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping delay-150"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping delay-300"></div>
      </div>
    </div>
  );
};

export default Loading;
