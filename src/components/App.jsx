import React, { Component } from "react";
import axios from "axios";
import Pics from "./Pics/Pics";

class App extends Component {
  state = {
    img: [],
  };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 7Y88pMJGGYouUOqyafPNSRnnmSNnFFRbTXoZskcotvE",
      },
    });
    console.log(response.data.results);
    this.setState({ img: response.data.results });
  };

  render() {
    return (
      <div className="container" style={{ width: "1200px" }}>
        <Pics onSubmit={this.onSearchSubmit} />
        found:{this.state.img.length}
        <div class="">
          <div class="row custom">
            {this.state.img.map((item) => (
              <img src={item.urls.full} class="ui image" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
