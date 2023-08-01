import React, { createContext } from "react";
import { useState } from "react";
import {
  useFilterTodos,
  useProjects,
  useProjectsWithStats,
  useTodos,
  useUser,
} from "../hooks";
const TodoContext = createContext();

function TodoContextProvider({ children }) {
  // STATE
  const defaultProject = "today";
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [selectedTodo, setSelectedTodo] = useState(undefined);
  // HOOK
  const todos = useTodos();
  const projects = useProjects();
  const projectsWithStats = useProjectsWithStats(projects, todos);
  const filteredTodos = useFilterTodos(todos, selectedProject);
  return (
    <TodoContext.Provider
      value={{
        defaultProject,
        selectedProject,
        setSelectedProject,
        todos: filteredTodos,
        projects: projectsWithStats,
        selectedTodo,
        setSelectedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
