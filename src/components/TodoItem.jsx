import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { completed, id, title } = this.props.todo;
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            this.props.handleChange(id);
          }}
        />
        <span className={completed ? "completed" : ""}>{title}</span>
        <button
          className="btn-style"
          onClick={() => {
            this.props.deleteTodo(id);
          }}
        >
          {" "}
          X{" "}
        </button>
      </li>
    );
  }
}

export default TodoItem;
