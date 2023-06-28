import { useState } from "react";
import "./App.css";
import SignUpFormHook from "./components/forms/SignUpFormHook";

// import Blog from "./components/Blog";
// import Dropdown from "./components/Dropdown";
// import StopWatch from "./components/StopWatch";
// import HackerNews from "./components/news/HackerNews";
// import Form from "./components/forms/Form";
// import MovieSearchApp from "./components/MovieSearchApp";
// import SignUpForm from "./components/forms/SignUpForm";
// import SignUpFormV2 from "./components/forms/SignUpFormV2";

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
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpFormV2></SignUpFormV2> */}
      <SignUpFormHook></SignUpFormHook>
    </div>
  );
}

export default App;
