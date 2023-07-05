import { useField } from "formik";

// eslint-disable-next-line react/prop-types
const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label htmlFor={props.id} className="cursor-pointer">
        {label}
      </label>
      <input
        className="p-4 border transition-all bg-white rounded-lg outline-none focus:border-blue-600"
        {...field}
        {...props}
      />

      {meta.error && meta.error ? (
        <p className="text-red-500 text-sm">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default InputFormik;
