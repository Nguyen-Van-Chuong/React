import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const error = {};
//   if (!values.firstName) {
//     error.firstName = "required";
//   } else if (values.firstName.length > 20) {
//     error.firstName = "Must be 20 character 20";
//   }

//   if (!values.lastName) {
//     error.lastName = "required";
//   } else if (values.lastName.length > 20) {
//     error.lastName = "musr ";
//   }
//   return error;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 character 20")
        .required("required"),
      lastName: Yup.string().max(10, "Must be 20 character 20").required("re"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your firsname name"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-600">{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName">lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your firsname name"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-600">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className="">
        <button
          type="submit"
          className="w-full p-4 bg-blue-400 text-white rounded-lg"
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
