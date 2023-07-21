import React, { Component, useState } from "react";
import axios from "axios";
import Pics from "./Pics/Pics";

const App = () => {
  const [img, setImg] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 7Y88pMJGGYouUOqyafPNSRnnmSNnFFRbTXoZskcotvE",
      },
    });
    console.log(response.data.results);
    setImg(response.data.results);
  };
  return (
    <div className="container" style={{ width: "1200px" }}>
      <Pics onSubmit={onSearchSubmit} />
      found:{img.length}
      <div class="">
        <div class="row custom">
          {img.map((item) => (
            <img src={item.urls.full} class="ui image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
