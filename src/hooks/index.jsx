import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import moment from "moment";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todosRef = collection(db, "todos");
    const unsubcribe = onSnapshot(todosRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(data);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  return todos;
}

export function useFilterTodos(todos, selectedProject) {
  // state
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    let data;
    const todayDateFormated = moment().format("MM/DD/YYYY");
    if (selectedProject === "today") {
      data = todos.filter((todo) => todo.date === todayDateFormated);
    } else if (selectedProject === "next 7 days") {
      data = todos.filter((todo) => {
        const todoDate = moment(todo.date, "MM/DD/YYYY");
        const todayDate = moment(todayDateFormated, "MM/DD/YYYY");
        const diffDays = todoDate.diff(todayDate, "days");
        return diffDays >= 0 && diffDays < 7;
      });
    } else if (selectedProject === "all days") {
      data = todos;
    } else {
      data = todos.filter((todo) => todo.projectName === selectedProject);
    }
    setFilteredTodos(data);
  }, [todos, selectedProject]);
  return filteredTodos;
}
export function useProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const todosRef = collection(db, "projects");
    const unsubcribe = onSnapshot(todosRef, (doc) => {
      const data = doc.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name,
        };
      });
      setProjects(data);
    });
    return () => unsubcribe();
  }, []);
  return projects;
}

export function useProjectsWithStats(projects, todos) {
  const [projectsWithStats, setProjectsWithStats] = useState([]);

  useEffect(() => {
    const data = projects.map((project) => {
      return {
        numOfTodos: todos.filter(
          (todo) => todo.projectName === project.name && !todo.checked
        ).length,
        ...project,
      };
    });
    setProjectsWithStats(data);
  }, [projects, todos]);
  return projectsWithStats;
}

export function useUser() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        console.log("signout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { currentUser, logout };
}
