import React, { Children, useRef } from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return (
    showModal && (
      <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-600 z-10 "
        ref={modalRef}
        onClick={closeModal}
      >
        <div className="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/4 z-20">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
