// eslint-disable-next-line no-unused-vars
import { useField } from "formik";

// eslint-disable-next-line react/prop-types
const RadioFormik = (props, label) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
      <label className="custom-radio">
        <input
          {...field}
          type="radio"
          className="hidden"
          // eslint-disable-next-line react/prop-types
          value={props.value}
          // eslint-disable-next-line react/prop-types
          checked={props.checked}
        />
        <div className="bg-white h-full w-full rounded-full"></div>
      </label>
      <span>{props.label}</span>
    </div>
  );
};

export default RadioFormik;
