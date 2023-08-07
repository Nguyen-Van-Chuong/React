import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import AddNewTodo from "../components/AddNewTodo";
import Calendar from "../components/Calendar";
import Projects from "../components/Projects";
import Main from "../components/Main";
import Todos from "../components/Todos";
import EditTodo from "../components/EditTodo";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
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
      </Main>
    </>
  );
};

export default Home;
