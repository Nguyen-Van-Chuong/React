import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import Calendar from "./components/Calendar";
import EditTodo from "./components/EditTodo";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Todos from "./components/Todos";
import User from "./components/User";
// import Login from "./pages/Login";
// import LoginTest from "./pages/LoginTest";
// import Signup from "./pages/Signup";
// import SignupTest from "./pages/SignupTest";
import { ToastContainer } from "react-toastify";
import LoginTest from "./pages/LoginTest";
// import LoginPage from "./LoginPage/LoginPage";
// import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App flex w-[100vw] h-[100vh] overflow-hidden bg-[url('https://source.unsplash.com/random')] bg-cover bg-no-repeat">
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
        {/* <Login></Login> */}
        {/* <Signup></Signup> */}
        {/* <SignupTest></SignupTest> */}
        {/* <LoginTest></LoginTest> */}
        {/* <LoginPage></LoginPage> */}
        {/* <Signin></Signin> */}
      </Main>
    </div>
  );
}

export default App;
