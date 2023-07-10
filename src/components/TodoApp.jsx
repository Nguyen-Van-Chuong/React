import React, { Component } from "react";
import Header from "./layouts/Header";
import AddTodo from "./AddTodo";
import axios from "axios";
import { v4 } from "uuid";
import Todos from "./Todos";

class TodoApp extends Component {
  state = {
    todos: [],
  };
  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((res) => {
        this.setState({
          todos: [
            ...this.state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        });
      });
  };
  addTodo = (title) => {
    const newData = {
      title: title,
      completed: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", newData)
      .then((res) => {
        this.setState({
          todos: [...this.state.todos, res.data],
        });
      });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          handleChange={this.handleCheckboxChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
  componentDidMount() {
    const config = {
      params: {
        _limit: 10,
      },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((res) =>
        this.setState({
          todos: res.data,
        })
      );
  }
}

export default TodoApp;
