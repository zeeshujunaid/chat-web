import React, { useEffect } from "react";
import { useNavigate, } from "react-router-dom";

function Loading ()  {
  const navigate = useNavigate()

  useEffect(()=>{
    checkuser()
  },[])

  const checkuser = async ()=>{
    const userid = await localStorage.getItem('userid');
    if (userid !== null) {
      navigate("/home")
    }
    else{
      navigate("/login")
    }

    }
  // checkuser()


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
