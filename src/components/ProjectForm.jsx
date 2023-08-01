import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import React from "react";

const ProjectForm = ({
  handleSubmit,
  heading,
  setValue,
  value,
  setShowModal,
  confirmText,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-4 pb-10 bg-white rounded min-w-[500px]"
    >
      <h3 className="text-xl font-bold">{heading}</h3>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      {/* <TextField
        label="Username"
        variant="outlined"
        name="username"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Project name"
      ></TextField>
      <input
        type="text"
        value={value}
        className="w-full h-10 my-3.5 border outline-none focus:border-sky-500 font-[1.2rem] mb-2 transition-all"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Project name"
      />
      <button
        className="absolute bottom-0 left-0 h-10  w-[50%] text-base font-bold text-white bg-slate-500 hover:bg-slate-400 transition-all
        "
        onClick={() => setShowModal(false)}
      >
        Cancel
      </button>

      <div
        className="absolute bottom-0 right-0 h-10 w-[50%] text-base font-bold text-white hover:bg-[#3e98f2] transition-all
       bg-[#0080ff]"
      >
        <Button type="submit" variant="contained" color="primary">
          {confirmText}
        </Button>
      </div> */}
    </form>
  );
};

export default ProjectForm;
