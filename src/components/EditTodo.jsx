import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { projects } from "../constants";

const EditTodo = ({}) => {
  // const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState();
  function handleSubmit(e) {
    e.target.preventDefault();
  }
  return (
    <div className="absolute bottom-10 left-[530px] h-[80%] opacity-[0.9]">
      <TodoForm
        heading="Edit todo"
        hanleSubmit={handleSubmit}
        projects={projects}
        text={text}
        setText={setText}
        day={day}
        setDay={setDay}
        time={time}
        setTime={setTime}
        todoProject={todoProject}
        setTodoProject={setTodoProject}
      />
    </div>
  );
};

export default EditTodo;
