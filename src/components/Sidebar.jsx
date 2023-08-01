import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context";
import { useRef } from "react";

const Sidebar = ({ children }) => {
  // CONTEXT
  const { setSelectedTodo } = useContext(TodoContext);
  // REF
  const sideBar = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  const handleClick = (e) => {
    if (e.target == sideBar.current || sideBar.current.contains(e.target)) {
      setSelectedTodo(undefined);
    }
  };
  return (
    <div
      className="bg-white Sidebar w-[300px] min-w-[210px] h-full"
      ref={sideBar}
    >
      {children}
    </div>
  );
};

export default Sidebar;
