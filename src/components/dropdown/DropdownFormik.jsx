// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useField } from "formik";

// eslint-disable-next-line no-unused-vars, react/prop-types
const DropdownFormik = ({ labelText, name, data, dropdownLabel, setValue }) => {
  const [field, meta] = useField({ name });

  const [label, setLabel] = useState(dropdownLabel);
  const { nodeRef, setShow, show } = useClickOutSide();
  // eslint-disable-next-line no-unused-vars
  //   const jobValue = useWatch({
  //     control,
  //     name: "job",
  //     defaultValue: "",
  //   });
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };
  useEffect(() => {
    if (field.value === "") setLabel(dropdownLabel);
  }, [field.value]);

  return (
    <div className="flex flex-col gap-3 mb-5">
      <label htmlFor="">{labelText}</label>
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
          {data &&
            // eslint-disable-next-line react/prop-types
            data.length &&
            // eslint-disable-next-line react/prop-types
            data.map((item) => (
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
      {meta.error && meta.error ? (
        <p className="text-red-500 text-sm">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default DropdownFormik;
