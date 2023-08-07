import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-bootstrap-icons";
// import { Modal } from "@material-ui/core";

const fields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };
  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    // <Modal open={false}>
    <div
      className="p-4 bg-white md:w-8/12 lg:ml-6 lg:w-5/12 lg:p-8"
      style={{ margin: "auto", marginTop: "200px" }}
    >
      <div className="mb-10">
        <div className="flex justify-center">
          <img
            alt=""
            className="h-14 w-14"
            src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
          />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Login to your account
        </h2>
        <p className="mt-2 mt-5 text-sm text-center text-gray-600">
          Don't have an account yet?
          <Link
            to={"/signup"}
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Signup
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <label
              htmlFor="remember-me"
              className="block ml-2 text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="relative flex justify-center w-full px-4 py-2 mt-10 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          onSubmit={handleSubmit}
        >
          login
        </button>
      </form>
    </div>
    // </Modal>
  );
}
