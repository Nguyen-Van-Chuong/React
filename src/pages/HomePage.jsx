import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import AddNewTodo from "../components/AddNewTodo";
import Calendar from "../components/Calendar";
import Projects from "../components/Projects";
import Main from "../components/Main";
import Todos from "../components/Todos";
import EditTodo from "../components/EditTodo";

const HomePage = () => {
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
      </Main>
    </div>
  );
};

export default HomePage;
