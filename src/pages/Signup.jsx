import { useState } from "react";
import Input from "../components/Input";
import { Link, Modal } from "@material-ui/core";
// import { Link } from "react-bootstrap-icons";

const fields = [
  // {
  //   labelText: "Username",
  //   labelFor: "username",
  //   id: "username",
  //   name: "username",
  //   type: "text",
  //   autoComplete: "username",
  //   isRequired: true,
  //   placeholder: "Username",
  // },
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
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ---------------------------//
  const [signupState, setSignupState] = useState(fieldsState);
  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  return (
    <Modal open={true}>
      <div
        className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-white lg:p-8 p-4"
        style={{ margin: "auto", marginTop: "200px" }}
      >
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Signup to creat an account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            Already have an account?
            <Link
              to={"/signup"}
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              login
            </Link>
          </p>
          <div className="">
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={signupState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              onSubmit={handleSubmit}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
