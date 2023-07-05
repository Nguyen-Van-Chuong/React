// eslint-disable-next-line no-unused-vars
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import RadioFormik from "../radio/RadioFormik";
import CheckboxFormik from "../checkbox/CheckboxFormik";
import DropdownFormik from "../dropdown/DropdownFormik";
import InputFormik from "../input/InputFormik";

const RegisterFormik = () => {
  const dropdownData = [
    { id: 1, value: "teachers", text: "Teacher" },
    { id: 2, value: "developer", text: "Developer" },
    { id: 3, value: "doctor", text: "Doctor" },
    { id: 4, value: "kkk", text: "kkk" },
  ];
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        term: false,
        job: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required(),
        email: Yup.string().email("hchshcsh").required("please nhập email"),
        password: Yup.string()
          .required("Please enter your password")
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ),
        gender: Yup.string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "please choice gender"),
        term: Yup.boolean().oneOf(
          [true],
          "Please check the term and conditions"
        ),
        job: Yup.string().required("please select your job"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 5000);
      }}
    >
      {(formik) => {
        const watchGender = formik.values.gender;
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
          >
            <InputFormik
              name="username"
              placeholder="Enter your ussername"
              id="username"
              label="User name"
              type="text"
            ></InputFormik>
            <InputFormik
              name="email"
              placeholder="Enter your email"
              id="email"
              label="Email"
              type="email"
            ></InputFormik>
            <InputFormik
              name="password"
              placeholder="Enter your password"
              id="password"
              label="Password"
              type="password"
            ></InputFormik>
            <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="gender" className="cursor-pointer">
                gender
              </label>
              <div className="flex items-center gap-5">
                <RadioFormik
                  name="gender"
                  value="male"
                  label="Male"
                  checked={watchGender === "male"}
                />
                <RadioFormik
                  name="gender"
                  value="female"
                  label="Female"
                  checked={watchGender === "female"}
                />
              </div>
              <DropdownFormik
                labelText="Your job "
                data={dropdownData}
                name="job"
                dropdownLabel="Select your job"
                setValue={formik.setFieldValue}
              ></DropdownFormik>
              <CheckboxFormik name="term" checked={formik.values.term}>
                i accept the term and conditions
              </CheckboxFormik>
              {/* {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )} */}
            </div>
            <button
              type="submit"
              // disabled={formik.isSubmitting}
              className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold"
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 rounded-full border-2 border-white mx-auto border-t-transparent animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
