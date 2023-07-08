import ModalBase from "./ModalBase";

// eslint-disable-next-line react/prop-types
const ModalAdvanced = ({ children, heading, ...props }) => {
  return (
    <ModalBase {...props}>
      <span
        className="absolute top-0 right-0 w-10 h-10 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
        onClick={props.onClose}
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
      <h2 className="text-4xl font-medium text-black text-enter">{heading}</h2>
      {children}
    </ModalBase>
  );
};

export default ModalAdvanced;