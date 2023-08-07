import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoContextProvider } from "./context";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginTest from "./pages/LoginTest";
import SignupTest from "./pages/SignupTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <TodoContextProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/login" element={<LoginTest />}></Route>
            </Route>
            <Route path="/signup" element={<SignupTest />}></Route>
          </Routes>
        </TodoContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
