import { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Toolstip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleOver = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div className="">
      {hovered && <ToolstipContent coords={coords}>{children}</ToolstipContent>}
      {/* <ToolstipContent>{children}</ToolstipContent> */}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleOver}>
        {text}
      </span>
    </div>
  );
};
/*bottom:62.39999961853027
height: 21.600000381469727
left: 40
right: 110.8125
top: 40.79999923706055
width :70.8125
x: 40
y:40.79999923706055 */
function ToolstipContent({ children, coords }) {
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block p-3 text-white -translate-y-full bg-black rounded-xl"
      style={{
        top: coords.top - coords.height / 2,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default Toolstip;
