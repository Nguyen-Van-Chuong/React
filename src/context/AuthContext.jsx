import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { useUser } from "../hooks";

const AuthContext = createContext();
function AuthContextProvider({ children }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // CONTEXT
  const { currentUser, logout } = useUser();
  //
  const signin = (email, password) => {
    if (email && password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const userq = userCredential;
          // console.log(userq);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        // email,
        // password,
        // setEmail,
        // setPassword,
        signin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
