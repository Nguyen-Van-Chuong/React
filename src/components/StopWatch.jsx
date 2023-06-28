import React, { useRef, useState } from "react";

const StopWatch = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    console.log(timerRef.current);

    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <div>
      {" "}
      {count}s{" "}
      <div className="">
        <button onClick={handleStart}> Start </button>{" "}
        <button onClick={handleStop}> Stop </button>{" "}
      </div>{" "}
    </div>
  );
};

export default StopWatch;
