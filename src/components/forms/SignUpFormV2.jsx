import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 character 20")
          .required("required"),
        lastName: Yup.string()
          .max(10, "Must be 20 character 20")
          .required("re"),
        email: Yup.string().email().required("required"),
        intro: Yup.string().required("re"),
        job: Yup.string().required("required"),
        terms: Yup.boolean().oneOf([true], "please check condition"),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="First name"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>
            <MyInput
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>
            <MyInput
              label="Email address"
              name="email"
              placeholder="Enter your email address"
              id="email"
              type="email"
            ></MyInput>
            <MyTextarea
              label="Introduce yourself"
              name="intro"
              placeholder="Enter your introduce"
              id="intro"
            ></MyTextarea>
            <MySelectBox name="job" label="Select your job">
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
            </MySelectBox>
            <MyCheckbox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckbox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
      {/* {({ isSubmitting }) => (
        <Form className="p-10 w-full max-w-[500px] mx-auto">
          <div className="flex flex-col gap-2">
            <MyInput
              label="first Name"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>
            <MyInput
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>
            <MyInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              id="email"
            ></MyInput>
            <MyTextarea
              name="intro"
              label="Introduct"
              id="intro"
              placeholder="Enter your intro"
              className="p-4 rounded-md border border-gray-100"
              as="textarea"
            ></MyTextarea>
            <MySelectBox name="job" id="job" label="select your job">
              <option value="frontend">fromtend</option>
              <option value="backend">backend</option>
            </MySelectBox>
            <MyCheckbox name="terms">I acept the terms</MyCheckbox>
          </div>
          <div className="">
            <button
              type="submit"
              className="w-full p-4 bg-blue-400 text-white rounded-lg"
              disabled={isSubmitting}
            >
              submit
            </button>
          </div>
        </Form>
      )} */}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("🚀 --> MyInput --> field:", useField(props));

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      ></select>
      {meta.touched && meta.error ? (
        <div className="text-red-700">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...props} {...field} />
        {children}
        {meta.touched && meta.error ? (
          <div className="text-red-700">{meta.error}</div>
        ) : null}
      </label>
    </div>
  );
};

export default SignUpFormV2;
