import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import DropdownPortal from "./components/DropdownPortal";

import Toolstip from "./components/tooltip/ToolsTip";
// import RegisterFormik from "./components/form/RegisterFormik";
// import RegisterHook from "./components/form/RegisterHook";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <RegisterHook></RegisterHook> */}
      {/* <RegisterFormik></RegisterFormik> */}
      {/* <Modal
        open={show}
        handleClose={() => {
          setShow(false);
        }}
      ></Modal> */}
      {/* <button
        className="p-10 text-white bg-blue-500 rounded-lg"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show modal
      </button> */}
      {/* <DropdownPortal></DropdownPortal> */}
      <div className="p-20">
        <Toolstip text="Hover me">This it is a hover text</Toolstip>
      </div>
    </>
  );
}

export default App;
