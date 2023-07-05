// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useWatch } from "react-hook-form";

// eslint-disable-next-line no-unused-vars, react/prop-types
const DropdownHook = ({ control, setValue, name, data, dropdownLabel }) => {
  const { nodeRef, setShow, show } = useClickOutSide();
  // eslint-disable-next-line no-unused-vars
  const jobValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const [label, setLabel] = useState(dropdownLabel);
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };
  useEffect(() => {
    if (jobValue === "") setLabel(dropdownLabel);
  }, [jobValue]);

  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white overflow-hidden ${
          show ? "" : "invisible opacity-0"
        }`}
      >
        {/* <div
          className="p-5 hover:bg-slate-500"
          onClick={handleClickDropdownItem}
          data-value="teacher"
        >
          Teacher
        </div>
        <div
          className="p-5 hover:bg-slate-500"
          onClick={handleClickDropdownItem}
          data-value="developer"
        >
          Developer
        </div>
        <div
          className="p-5 hover:bg-slate-500"
          onClick={handleClickDropdownItem}
          data-value="doctor"
        >
          Doctor
        </div> */}

        {data.map((item) => (
          <div
            className="p-5 cursor-PointerEvent hover:bg-gray-100"
            key={item.id}
            data-value={item.value}
            onClick={handleClickDropdownItem}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownHook;
