// eslint-disable-next-line no-unused-vars
import React from "react";
import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    // eslint-disable-next-line react/prop-types
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 border transition-all bg-white rounded-lg outline-none focus:border-blue-600"
      {...field}
      {...props}
    ></input>
  );
};

export default InputHook;
