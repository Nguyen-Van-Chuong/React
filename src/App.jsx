import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./actions/counter";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter {counter}</h1>
      <button
        onClick={() => dispatch(increment(5))}
        className="p-3 text-white bg-green-400 "
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement(5))}
        className="p-3 text-white bg-green-400 "
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset(0))}
        className="p-3 text-white bg-green-400 "
      >
        reset
      </button>
    </div>
  );
};
export default App;
