import { useState } from "react";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex items-center justify-center">
        <div className="flex-1 p-8">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-indigo-600">
                Welcome back!
              </h1>
              <form className="mt-12" action="" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    id="signin-email"
                    name="email"
                    type="text"
                    className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-indigo-600"
                    placeholder="john@doe.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address{" "}
                  </label>{" "}
                </div>{" "}
                <div className="relative mt-10">
                  <input
                    id="signin-password"
                    type="password"
                    name="password"
                    className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-indigo-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password{" "}
                  </label>{" "}
                </div>
                <input
                  type="submit"
                  value="Sign in"
                  className="block w-full px-8 py-4 mt-20 font-semibold text-center text-white uppercase bg-indigo-600 rounded-full cursor-pointer hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80"
                />
              </form>{" "}
              <a
                href="#"
                className="block mt-4 text-sm font-medium text-center text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {" "}
                Forgot your password ?{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default SigninForm;
