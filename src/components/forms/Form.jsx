import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [values, setValues] = useState({
  //   fullname: "",
  //   gmail: "",
  //   hobby: false,
  // });
  // const handleInput = (e) => {
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // };
  const { handleChange, values } = useHandleChange({
    fullname: "",
    gmail: "",
    hobby: false,
  });
  console.log(values);

  return (
    <div>
      <input
        type="text"
        name="fullname"
        placeholder="input"
        onChange={handleChange}
      />
      <input
        type="email"
        name="gmail"
        placeholder="input"
        onChange={handleChange}
      />

      <button className="bg-slate-500  max-w-[300px] p-5 border border-gray-200 rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default Form;
