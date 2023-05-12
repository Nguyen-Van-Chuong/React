import React, { Component } from "react";
import "./style.css";

class Pics extends Component {
  render() {
    return (
      <div>
        <h1>Bài 1</h1>
        <h2 className="title">Live Search: React Application</h2>
        <input type="text" placeholder="Search..." className="search_any" />
      </div>
    );
  }
}

export { Pics };
