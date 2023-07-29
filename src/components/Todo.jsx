import React, { useState } from "react";
import {
  ArrowClockwise,
  CheckCircleFill,
  Circle,
  Trash,
} from "react-bootstrap-icons";
import {
  doc,
  deleteDoc,
  updateDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import moment from "moment";

const Todo = ({ todo }) => {
  const [hover, setHover] = useState(false);

  async function deleteTodo(id) {
    await deleteDoc(doc(db, "todos", id));
  }
  async function checkTodo(todo) {
    const todoRef = doc(db, "todos", todo.id);
    await updateDoc(todoRef, {
      checked: !todo.checked,
    });
  }
  async function nextRepeatNextDay({ id, ...todo }) {
    const nextDayDate = moment(todo.date, "MM/DD/YYYY").add(1, "days");

    await addDoc(collection(db, "todos"), {
      ...todo,
      checked: false,
      date: nextDayDate.format("MM/DD/YYYY"),
      day: nextDayDate.format("d"),
    });
  }
  return (
    <div className="flex px-4 py-2 todo">
      <div
        className="flex items-center w-full todo-container"
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        <span className="checked" onClick={() => checkTodo(todo)}>
          {todo.checked ? (
            <CheckCircleFill color="#bebebe" />
          ) : (
            <Circle color={todo.color} />
          )}
        </span>

        <div className="relative flex-1 text mx-[10px]">
          <p style={{ color: todo.checked ? "#bebebe" : "#000000" }}>
            {todo.text}
          </p>
          <span className="text-[0.8rem]">
            {todo.time} - {todo.project}
          </span>
          <div
            className={`line bg-black absolute top-1/4 ${
              todo.checked ? "h-[1px] w-full" : ""
            }`}
          ></div>
        </div>
        <div className=" add-to-next-day mr-[10px]">
          {todo.checked && (
            <span>
              <ArrowClockwise onClick={() => nextRepeatNextDay(todo)} />
            </span>
          )}
        </div>
        <div className="delete-todo">
          {(hover || todo.checked) && (
            <span onClick={() => deleteTodo(todo.id)}>
              <Trash />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
