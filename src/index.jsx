import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoContextProvider } from "./context";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </TodoContextProvider>
  </React.StrictMode>
);
