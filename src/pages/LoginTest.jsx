import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  Modal,
} from "@material-ui/core";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const LoginTest = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  // CONTEXT
  const { currentUser, signin, logout } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email, password)) {
      signin(email, password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <Modal open={true}>
        <div className="max-w-md m-auto">
          {currentUser ? <div className="">{currentUser.uid}</div> : "signin"}
          <form action="" onSubmit={handleSubmit}>
            <input
              type="email"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">submit</button>
            {auth?.currentUser?.email ? (
              <button
                className=""
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            ) : (
              "login"
            )}
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LoginTest;
