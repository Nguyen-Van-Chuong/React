import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const TodoForm = ({
  hanleSubmit,
  heading = false,
  text,
  setText,
  day,
  todoProject,
  setTodoProject,
  setDay,
  time,
  setTime,
  projects,
  showButtons = false,
  setShowModal = false,
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form
        action=""
        onSubmit={hanleSubmit}
        className="bg-slate-100 p-4 w-[500px] rounded todoForm overflow-y-auto pb-10"
      >
        <div className="text">
          {heading && (
            <h3 className="my-4 mx-0.5 font-bold text-[1.2rem]">{heading}</h3>
          )}
          <input
            type="text"
            value={text}
            className="w-full p-4 border outline-none focus:border-sky-500 font-[1.2rem] mb-2 transition-all"
            onChange={(e) => setText(e.target.value)}
            placeholder="To do ..."
            autoFocus
          />
        </div>
        <div className="flex items-center p-2 gap-x-2">
          <Bell />
          <p>remind me</p>
        </div>
        <div className="p-6">
          <div className="flex items-center p-2 gap-x-2">
            <CalendarDay></CalendarDay>
            <p>Choose day</p>
          </div>
          <DatePicker
            color="blue"
            value={day}
            onChange={(day) => setDay(day)}
          ></DatePicker>
        </div>
        <div className="p-6">
          <div className="flex items-center p-2 gap-x-2">
            <Clock />
            <p>Choose day</p>
          </div>

          <TimePicker
            color="blue"
            value={time}
            onChange={(time) => setTime(time)}
          ></TimePicker>
        </div>
        <div className="flex items-center p-2 gap-x-2">
          <Palette />
          <p>Choose a project</p>
        </div>
        <div className="flex flex-wrap p-4 pb-0 projects">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project p-1.5 rounded border border-slate-500 m-1.5 hover:bg-blue-400 transition-all ${
                todoProject === project.name ? "bg-blue-400 text-white" : ""
              }`}
              onClick={() => setTodoProject(project.name)}
            >
              {project.name}
            </div>
          ))}
          {/* <div className="project active p-1.5 rounded border border-slate-500 m-1.5 hover:bg-blue-400 transition-all">
            Personal
          </div>
          <div className="project p-1.5 rounded border border-slate-500 m-1.5 hover:bg-blue-400 transition-all">
            work
          </div> */}
        </div>
        {showButtons && (
          <>
            <div
              className="absolute top-0 right-[5px] cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <X size={40} />
            </div>
            <div className="absolute bottom-0 left-0 w-full confirm">
              <button className="w-full h-10 bg-blue-400">+ add to do</button>
            </div>
          </>
        )}
      </form>
    </MuiPickersUtilsProvider>
  );
};

export default TodoForm;
