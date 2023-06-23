import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  const dom = nodeRef.current;
  function handleMouseOut() {
    setHovered(false);
  }
  function handleMouseOver() {
    setHovered(true);
  }
  useEffect(() => {
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom && dom.removeEventListener("mouseover", handleMouseOver);
      dom && dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return {
    hovered,
    nodeRef,
  };
}
