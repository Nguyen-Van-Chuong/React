import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useUser() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        return;
      }
    });
    return () => unsubscribe();
  }, []);

  const signin = (email, password) => {
    if (email && password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const userq = userCredential;

          toast.success("Logged in successfully", {
            position: "top-right",
            autoClose: 3000, // Thời gian tự động đóng sau 3 giây
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 3000,
          });
        });
    }
  };

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
  // còn thiếu  firstName, passWord, phone
  const signup = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Tạo một tài khoản người dùng trong bảng "users"
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          // firstName: firstName,
          // passWord: passWord,
          // phone: phone,
          // Thêm các trường thông tin khác của người dùng tại đây
        });
        toast.success("Sign Up Success", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return { currentUser, logout, signin, signup };
}
