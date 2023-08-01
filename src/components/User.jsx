import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const User = () => {
  // CONTEXT
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="flex items-center justify-between p-4 border-b-2">
        {currentUser ? (
          <>
            {" "}
            <div className="w-12 h-12">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col ">
              <span className="text-lg font-bold">{currentUser?.email}</span>
              <a href="#" className="text-gray-300">
                Log out
              </a>
            </div>
          </>
        ) : (
          "SIgnin"
        )}
      </div>
    </>
  );
};

export default User;
