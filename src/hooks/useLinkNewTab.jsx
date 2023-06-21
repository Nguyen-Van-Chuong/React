import React, { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef({});
  useEffect(() => {
    const links = contentRef.current.querySelectorAll("a");
    links.length > 0 &&
      links.forEach((item) => {
        item.setAttribute("target", "_blank");
      });
  }, []);
  return {
    contentRef,
  };
}
