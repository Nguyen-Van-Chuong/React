import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object({
  firstName: Yup.string().required().max(10, "overdope"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (values) => {
    // return new Promise((resolver) => {
    //   setTimeout(() => {
    //     resolver();
    //   }, 5000);
    // });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your firsname name"
          className="p-4 rounded-md border border-gray-100"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName?.message && (
          <div className="text-red-500">{errors?.firstName?.message}</div>
        )}

        {/* {errors?.firstName?.type === "required" && (
          <div className="text-red-500">nhập</div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500">nhập dưới 10 kí tự</div>
        )} */}

        <label htmlFor="lastName">lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your firsname name"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.lastName?.type === "required" && (
          <div className="text-red-500">nhập kí tự</div>
        )}
        {errors?.lastName?.type === "maxLength" && (
          <div className="text-red-500">nhập dưới 10 kí tự</div>
        )}
        <label htmlFor="lastName">email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email name"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        />
      </div>
      <div className="">
        <button
          type="submit"
          className="w-full p-4 bg-blue-400 text-white rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
