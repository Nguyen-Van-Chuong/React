import { useField } from "formik";

const CheckboxFormik = ({ children, ...props }) => {
  const [field, meta] = useField();

  return (
    <div className="flex flex-col gap-3">
      <label className="custom-checkbox ">
        <input
          type="checkbox"
          {...field}
          {...props}
          checked={field.value.term}
          className="hidden"
          // eslint-disable-next-line react/prop-types
          id={props.name}
        />
        <div className="flex items-center gap-x-3 ">
          <div className="bg-white flex justify-center items-center h-full w-full rounded-sm custom-checkbox-square">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              width="16"
              color="white"
              height="17"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              ></path>
            </svg>
          </div>
          <label htmlFor={props.name} className="text-sm cursor-pointer">
            {children}
          </label>
        </div>
      </label>
      {meta.error && meta.error.term ? (
        <p className="text-red-500 text-sm">{meta.error.term}</p>
      ) : null}
    </div>
  );
};

export default CheckboxFormik;
