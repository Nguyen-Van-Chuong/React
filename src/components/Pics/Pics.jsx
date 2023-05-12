import React, { Component } from "react";
import "./pics.css";
class Pics extends Component {
  state = {
    term: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ width: "630px" }}>
        <form action="" onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Pics;
