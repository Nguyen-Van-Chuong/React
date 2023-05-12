import "./App.css";
import { Pics } from "./components/Pics/index";
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <div className="search">
        <Pics></Pics>
        <Time></Time>
      </div>
    </div>
  );
}

export default App;
