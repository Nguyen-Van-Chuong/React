import { useState } from "react";
import "./App.css";
// import Blog from "./components/Blog";
// import Dropdown from "./components/Dropdown";
// import StopWatch from "./components/StopWatch";
import HackerNews from "./components/news/HackerNews";
import Form from "./components/forms/Form";
import MovieSearchApp from "./components/MovieSearchApp";

function App() {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }
  return (
    <div className="p-5">
      {/* <StopWatch></StopWatch> */}
      {/* <Dropdown></Dropdown> */}
      {/* <button className="p-5" onClick={toggle}>
        toggle
      </button>

      {show && <HackerNews></HackerNews>} */}
      {/* <Blog></Blog> */}
      {/* <HackerNews></HackerNews> */}
      {/* <Form></Form> */}
      <MovieSearchApp></MovieSearchApp>
    </div>
  );
}

export default App;
