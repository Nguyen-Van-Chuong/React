import React, { Component } from "react";
const time = () => {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
};
const current = setInterval(time, 1000);
class Time extends Component {
  render() {
    return (
      <div>
        <h1 className="">Current time</h1>
        <h1 id="demo"></h1>
      </div>
    );
  }
}

export default Time;
