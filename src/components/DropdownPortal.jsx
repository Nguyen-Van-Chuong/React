import { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coord, setCoord] = useState({});
  const handleClick = (e) => {
    setShow(!show);
    // const coords = nodeRef.current.getBoundingClientRect();
    setCoord(nodeRef.current.getBoundingClientRect());
    console.log(coord);
  };

  return (
    <div
      className="relative overflow-hidden w-full max-w-[400px]"
      ref={nodeRef}
    >
      <div
        className="w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && <DropdownList coord={coord} />}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const DropdownList = ({ coord }) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full"
      style={{
        left: coord.left,
        top: coord.top + coord.height + window.scrollY,
        width: coord.width,
      }}
    >
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">ReactJS</div>
      <div className="p-5 cursor-pointer">VueJS</div>
    </div>,
    document.querySelector("body")
  );
};

export default DropdownPortal;
