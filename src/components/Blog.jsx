import React, { useEffect, useRef } from "react";
import useLinkNewTab from "../hooks/useLinkNewTab";
import useHover from "../hooks/useHover";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum accusantium
        fugiat, doloremque, praesentium similique nulla{" "}
        <a
          href="https://fb.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          fbxsjxjsjxs
        </a>{" "}
        ab nisi sunt aut architecto sequi non quo quia reiciendis vitae enim
        recusandae sint! Deleniti?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum accusantium
        fugiat, doloremque, praesentium similique nulla{" "}
        <a href="https://gg.com" className="underline">
          fb
        </a>{" "}
        ab nisi sunt aut architecto sequi non quo quia reiciendis vitae enim
        recusandae sint! Deleniti?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum accusantium
        fugiat, doloremque, praesentium similique nulla{" "}
        <a href="https://fb.com" className="underline">
          fb
        </a>{" "}
        ab nisi sunt aut architecto sequi non quo quia reiciendis vitae enim
        recusandae sint! Deleniti?
      </p>
    </div>
  );
};

export default Blog;
