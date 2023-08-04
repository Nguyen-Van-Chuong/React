import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/streams/new">New</Link>
          </li>
          <li>
            <Link to="/streams/edit">Edit</Link>
          </li>
          <li>
            <Link to="/streams/delete">Delete</Link>
          </li>
          <li>
            <Link to="/streams/show">Show</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <div className="p-5">
      <Header></Header>
      <Routes>
        <Route path="/" Component={StreamList} />
        <Route path="/streams/new" Component={StreamCreate} />
        <Route path="/streams/edit" Component={StreamEdit} />
        <Route path="/streams/delete" Component={StreamDelete} />
        <Route path="/streams/show" Component={StreamShow} />
      </Routes>
    </div>
  );
}

export default App;
