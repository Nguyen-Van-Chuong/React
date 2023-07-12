import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="*" element={<div>error</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
