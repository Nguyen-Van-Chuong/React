// eslint-disable-next-line no-unused-vars
import React from "react";
import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    // eslint-disable-next-line react/prop-types
    name: props.name,
    // eslint-disable-next-line react/prop-types
    defaultValue: props.value,
  });
  return (
    <label className="custom-radio">
      <input
        type="radio"
        {...field}
        {...props}
        className="hidden"
        // eslint-disable-next-line react/prop-types
        value={props.value}
        checked={props.checked}
      />
      <div className="bg-white h-full w-full rounded-full"></div>
    </label>
  );
};

export default RadioHook;
