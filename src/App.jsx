import { useContext } from "react";
import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import Calendar from "./components/Calendar";
import EditTodo from "./components/EditTodo";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Todos from "./components/Todos";
import User from "./components/User";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";
// import Signup from "./pages/Signup";
import SignupTest from "./pages/SignupTest";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App flex w-[100vw] h-[100vh] overflow-hidden">
      <ToastContainer />
      <Sidebar>
        <User></User>
        <AddNewTodo></AddNewTodo>
        <Calendar></Calendar>
        <Projects></Projects>
      </Sidebar>
      <Main>
        <Todos></Todos>
        <EditTodo></EditTodo>
        <Login></Login>
        {/* <Signup></Signup> */}
        {/* <LoginTest></LoginTest> */}
        {/* <SignupTest></SignupTest> */}
      </Main>
    </div>
  );
}

export default App;
