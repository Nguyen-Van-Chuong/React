import React from "react";

const Main = ({ children }) => {
  return (
    <div className="bg-[url('https://source.unsplash.com/random')] bg-cover bg-no-repeat w-full h-full relative">
      {children}
    </div>
  );
};

export default Main;
