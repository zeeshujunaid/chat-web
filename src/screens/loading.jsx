import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const userId = await localStorage.getItem('userid');
    if (userId !== null) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Rotating Squares */}
        <div className="absolute w-16 h-16 border-4 border-t-4 border-blue-500 border-transparent rounded-md animate-spin-slow"></div>
        <div className="absolute w-16 h-16 border-4 border-t-4 border-purple-500 border-transparent rounded-md animate-spin-medium"></div>
        <div className="absolute w-16 h-16 border-4 border-t-4 border-pink-500 border-transparent rounded-md animate-spin-fast"></div>
        {/* Pulsing Circle */}
        <div className="absolute w-12 h-12 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default Loading;

<style jsx>{`
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes spin-medium {
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
  }
  
  @keyframes spin-fast {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }

  .animate-spin-slow {
    animation: spin-slow 4s linear infinite;
  }

  .animate-spin-medium {
    animation: spin-medium 3s linear infinite;
  }

  .animate-spin-fast {
    animation: spin-fast 2s linear infinite;
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
`}</style>
