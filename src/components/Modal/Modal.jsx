import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center  modal ${
        open === true ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="modal-content w-full bg-white rounded-lg relative z-10 modal-content max-w-[482px] p-10">
        <span
          className="absolute top-0 right-0 w-10 h-10 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
          onClick={handleClose}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
        <h2 className="text-4xl font-medium text-black text-enter">
          Welcome back
        </h2>
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
      </div>
    </div>,
    document.querySelector("body")
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
