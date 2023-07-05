// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/inputHook";
import RadioHook from "../radio/RadioHook";
import CheckBoxHook from "../checkbox/CheckBoxHook";
import DropdownHook from "../dropdown/DropdownHook";
// eslint-disable-next-line no-unused-vars
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email("hchshcsh").required("please nhập email"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "please choice gender"),
    job: yup.string().required("please select your job"),
    term: yup.boolean().required("Please accept"),
  })
  .required();
const dropdownData = [
  { id: 1, value: "teachers", text: "Teacher" },
  { id: 2, value: "developer", text: "Developer" },
  { id: 3, value: "doctor", text: "Doctor" },
  { id: 4, value: "kkk", text: "kkk" },
];

const RegisterHook = () => {
  const {
    // eslint-disable-next-line no-unused-vars
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    control,
    setValue,
    reset,
    watch,
    // eslint-disable-next-line no-unused-vars
    getValues,
  } = useForm({
    // resolver: yupResolver(schema),
    // mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });
  const onSubmitHandler = (values) => {
    if (!isValid) return;
    console.log(values);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        reset({
          username: "",
          email: "",
          password: "",
          gender: "male",
          term: false,
          job: "",
        });
      }, 5000);
    });
  };
  const watchGender = watch("gender");
  console.log("🚀 --> RegisterHook --> watchGender:", watchGender);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="" className="cursor-pointer">
          username
        </label>
        <InputHook
          name="username"
          placeholder="enter your username"
          id="username"
          control={control}
          type="text"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
        {/* <p className="text-red-500 text-sm">please enter your name</p> */}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          email address
        </label>
        <InputHook
          name="email"
          placeholder="enter your email"
          id="email"
          control={control}
          type="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="enter your password"
          id="password"
          control={control}
          type="password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="gender" className="cursor-pointer">
          gender
        </label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="male"
              checked={watchGender === "male"}
            />
            Male
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
              checked={watchGender === "female"}
            />
            Female
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <CheckBoxHook
          control={control}
          name="term"
          text="i accept the term and conditions"
        />
        {errors.term && (
          <p className="text-red-500 text-sm">{errors.term.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
          dropdownLabel={"Select your job"}
        />
        {errors.job && (
          <p className="text-red-500 text-sm">{errors.job.message}</p>
        )}
      </div>
      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
        {isSubmitting ? (
          <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
