import React from "react";
import { useAuth } from "../contexts/authContext";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  console.log("🚀 --> HeaderMain --> user:", user);

  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      {user ? (
        <>
          <div className="flex items-center gap-x-3">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium">
              Welcome back <strong>Chuong</strong>
            </span>
          </div>
          <button
            className="p-2 ml-auto bg-gray-300 rounded-md"
            onClick={() => {
              setUser(null);
            }}
          >
            Log out
          </button>
        </>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
    </div>
  );
};

export default HeaderMain;
