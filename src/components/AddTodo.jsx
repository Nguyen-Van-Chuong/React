import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };
  onInputChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <form action="#" className="form-container" onSubmit={this.addTodo}>
        <input
          type="text"
          placeholder="add todo"
          className="input-text"
          value={this.state.title}
          onChange={this.onInputChange}
        />
        <input type="submit" className="input-submit" />
      </form>
    );
  }
}

export default AddTodo;
