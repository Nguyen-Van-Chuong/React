import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="bg-white Sidebar w-[300px] min-w-[210px] h-full">
      {children}
    </div>
  );
};

export default Sidebar;
