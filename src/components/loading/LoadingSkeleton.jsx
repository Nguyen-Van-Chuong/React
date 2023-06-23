import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        height: props.height,
        width: props.width,
        borderRadius: props.border,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
