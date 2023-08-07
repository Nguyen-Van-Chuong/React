import { useState } from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import LeftOverlayContent from "./LeftOverlayContent";
import RightOverlayContent from "./RightOverlayContent";
import { Modal } from "@material-ui/core";
import useClickOutSide from "../hooks";
// import Modal from "../components/Modal";

const LoginPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [open, setOpen] = useState(false);
  // const { show, setShow, nodeRef } = useClickOutSide();
  const overlayBg =
    "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800";

  return (
    <div>
      <div className="" onClick={() => setOpen(!open)}>
        Login
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="flex items-center justify-center "
      >
        {/* <div className="flex items-center justify-center fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-900 bg-opacity-50 "> */}
        <div className="relative w-3/5 overflow-hidden bg-white rounded-lg h-3/5 ">
          <div
            id="signin"
            className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
              isAnimated ? "translate-x-full opacity-0" : ""
            }`}
          >
            <SigninForm />
          </div>

          <div
            id="signup"
            className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
              isAnimated
                ? "translate-x-full opacity-100 z-50 animate-show"
                : "opacity-0 z-10"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full">
              <SignupForm />
            </div>
          </div>

          <div
            id="overlay-container"
            className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transition-transform duration-700 ease-in-out z-100 ${
              isAnimated ? "-translate-x-full" : ""
            }`}
          >
            <div
              id="overlay"
              className={`${overlayBg} relative -left-full h-full w-[200%] transform transition transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-1/2" : "translate-x-0"
              }`}
            >
              <div
                id="overlay-left"
                className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[20%] transition transition-transform duration-700 ease-in-out ${
                  isAnimated ? "translate-x-0" : "-translate-x-[20%]"
                }`}
              >
                <LeftOverlayContent
                  isAnimated={isAnimated}
                  setIsAnimated={setIsAnimated}
                />
              </div>
              <div
                id="overlay-right"
                className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition transition-transform duration-700 ease-in-out ${
                  isAnimated ? "translate-x-[20%]" : "translate-x-0"
                }`}
              >
                <RightOverlayContent
                  isAnimated={isAnimated}
                  setIsAnimated={setIsAnimated}
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </div>
  );
};

export default LoginPage;
