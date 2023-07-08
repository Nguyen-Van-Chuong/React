import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";

// eslint-disable-next-line react/prop-types
const TooltipAdvanced = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });
  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div className="relative inline-block">
      <CSSTransition in={visible} classNames="fade" timeout={300} unmountOnExit>
        {(status) => {
          <Portal overlay={false} visible={status !== "exited"}>
            <p
              className="absolute inline-block p-3 text-white -translate-y-full bg-black rounded-xl max-w-[200px] -translate-x-2/4 tooltip"
              style={{
                top: coords.top - coords.height / 2 + window.scrollY,
                left: coords.left + coords.width / 2,
                transition: "all 300ms",
              }}
            >
              {children}
            </p>
          </Portal>;
        }}
      </CSSTransition>
      <div
        className="font-medium cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </div>
    </div>
  );
};

export default TooltipAdvanced;
