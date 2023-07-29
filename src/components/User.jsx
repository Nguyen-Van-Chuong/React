import React from "react";

const User = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b-2">
      <div className="w-12 h-12">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col ">
        <span className="text-lg font-bold">NVC</span>
        <a href="#" className="text-gray-300">
          Log out
        </a>
      </div>
    </div>
  );
};

export default User;
