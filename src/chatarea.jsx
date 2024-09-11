import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConfig/firebase";
import { collection, getDocs, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment"; // Optional for time formatting

function Chat() {
  const [showList, setShowList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [storageId, setStorageId] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
    const getId = localStorage.getItem("user");
    setStorageId(getId);
  }, []);

  // Get list of users
  async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    let arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setShowList(arr);
  }

  // Listen to chat messages
  useEffect(() => {
    if (selectedUser) {
      const q = query(
        collection(db, "Msg"),
        where(selectedUser.uid, "==", true),
        where(storageId, "==", true)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        const sortedList = list.sort((a, b) => a.createdAt - b.createdAt); // Sort by time
        setChat(sortedList);
      });
      return () => unsubscribe(); // Cleanup on unmount
    }
  }, [selectedUser, storageId]);

  // Send a message
  const sendMsg = async () => {
    if (message.trim() === "") return; // Prevent sending empty messages
    try {
      await addDoc(collection(db, "Msg"), {
        message,
        [storageId]: true,
        senderId: storageId,
        createdAt: Date.now(),
        [selectedUser.uid]: true,
      });
      setMessage(""); // Clear input
    } catch (e) {
      console.error("Error adding message:", e);
    }
  };

  // Logout
  const logoutBtn = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* User List Section */}
      <div className="w-1/2 bg-white shadow-lg">
        <nav className="bg-white shadow-md dark:bg-gray-900 p-4">
          <Link to="/home" className="text-2xl font-bold text-gray-800 dark:text-white">
            ZJ-CHAT-APP
          </Link>
          <div className="mt-6">
            <button
              onClick={logoutBtn}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Logout
            </button>
          </div>
        </nav>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Users</h2>
          <div className="space-y-2">
            {showList.length === 0 ? (
              <p className="text-gray-500">No users found.</p>
            ) : (
              showList.map((user, idx) => (
                <div
                  key={idx}
                  className={`p-4 cursor-pointer rounded-lg hover:bg-gray-200 ${
                    selectedUser?.uid === user.uid ? "bg-gray-300" : "bg-white"
                  }`}
                  onClick={() => setSelectedUser(user)} // Select user to chat
                >
                  <div className="text-lg font-semibold">{user.name}</div>
                  <div className="text-sm text-gray-600">{user.email}</div>
                  {/* Display phone number and blood group */}
                  <div className="text-sm text-gray-500">Phone: {user.phone || "N/A"}</div>
                  <div className="text-sm text-gray-500">Blood Group: {user.bloodGroup || "N/A"}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-3/4 bg-gray-100 p-6 flex flex-col justify-between">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="bg-white p-4 shadow-md">
              <h2 className="text-2xl font-bold">Chat with {selectedUser.name}</h2>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-auto p-4">
              {chat.length === 0 ? (
                <p className="text-center text-gray-500">No messages yet. Start the conversation!</p>
              ) : (
                chat.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      storageId === msg.senderId ? "justify-end" : "justify-start"
                    } mb-2`}
                  >
                    <div
                      className={`p-4 max-w-xs rounded-lg ${
                        storageId === msg.senderId ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                      }`}
                    >
                      <p>{msg.message}</p>
                      <p className="text-xs mt-1 text-gray-200">
                        {moment(msg.createdAt).startOf("second").fromNow()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Message Input */}
            <div className="bg-white p-4 flex items-center border-t border-gray-300">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                onClick={sendMsg}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-gray-500">Select a user to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
