import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
import Modal from "./components/Modal/Modal";
import ModalBase from "./components/Modal/ModalBase";
import Portal from "./components/Portal";
import { useState } from "react";
import ModalAdvanced from "./components/Modal/ModalAdvanced";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <Modal open={true}></Modal> */}
      {/* <Modal open={show} handleClose={() => setShow(!show)}></Modal>
      <ModalBase visible={true} onClose={() => setShow(false)}>
        msxm
      </ModalBase>
      */}
      <ModalAdvanced visible={true} onClose={() => console.log("jjjj")}>
        <label htmlFor="">f</label> <br />
        <input type="text" placeholder="ndcjdjc" />
      </ModalAdvanced>
      {/* <button className="p-5 bg-blue-200" onClick={() => setShow(!show)}>
        hh
      </button>
      <ModalAdvanced>xsxjsj</ModalAdvanced> */}
      {/* <ModalBase></ModalBase> */}
      {/* <Nav></Nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="*" element={<div>error</div>}></Route>
      </Routes> */}
    </>
  );
}

export default App;
