import { useState } from "react";
import "./App.css";
// import Modal from "./components/Modal/Modal";
// import DropdownPortal from "./components/DropdownPortal";

// import Toolstip from "./components/tooltip/ToolsTip";
// import Portal from "./components/Portal";
import ModalBase from "./components/Modal/ModalBase";
import ModalAdvanced from "./components/Modal/ModalAdvanced";
import TooltipAdvanced from "./components/tooltip/TooltipAdvanced";
import Toolstip from "./components/tooltip/ToolsTip";
// import RegisterFormik from "./components/form/RegisterFormik";
// import RegisterHook from "./components/form/RegisterHook";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen p-5">
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
      {/* <div className="p-20">
        <Toolstip text="Hover me">This it is a hover text</Toolstip>
      </div> */}
      {/* <Modal open={true} handleClose={() => {}}></Modal> */}
      {/* <Portal visible={false}></Portal> */}
      <button
        className="p-5 ml-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open base
      </button>
      <button
        className="p-5 ml-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="p-10 bg-white rounded-lg max-w-[320px] w-full">
          <TooltipAdvanced title="Toolstip">
            This is a toolstip2
          </TooltipAdvanced>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem,
          dolorem placeat quas obcaecati minus eius! Voluptas, minima!
          Perferendis molestiae vero rem dolore non ea laboriosam voluptates aut
          ab dignissimos?
        </div>
      </ModalBase>
      <ModalAdvanced
        visible={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        heading="wecome to back"
        bodyClassName="bg-white p-10 rounded-lg"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="text"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-blue-500 rounded-sm">
          Sign in
        </button>
      </ModalAdvanced>
      <div className="inline-block ml-5  w-full max-w-[320px]">
        <TooltipAdvanced title="Toolstip">This is a toolstip2 </TooltipAdvanced>
      </div>
      <Toolstip text="kkkk">hhhh</Toolstip>
    </div>
  );
}

export default App;
