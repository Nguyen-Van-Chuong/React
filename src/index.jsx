import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay/SeasonDisplay";

class App extends React.Component {
  state = { lat: null, erroMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ erroMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.erroMessage && !this.state.lat) {
      return <div>Error: {this.state.erroMessage}</div>;
    }
    if (!this.state.erroMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        </div>
      );
    }
    return <div>Loading!</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
