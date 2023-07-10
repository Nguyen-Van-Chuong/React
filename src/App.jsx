import { useContext, useState } from "react";
import "./App.css";
import { CountProvider, useCount } from "./contexts/countCountext";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./contexts/authContext";
import { GalleryProvider } from "./contexts/gallery-context";
import PhotoList from "./components/gallery/PhotoList";

function CountDisplay() {
  // const count = 0;
  const [count] = useCount();
  return <div className="">The count is {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  // const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
      onClick={increment}
    >
      Increment count
    </button>
  );
}
function App() {
  return (
    <>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
        </GalleryProvider>
      </AuthProvider>
    </>
  );
}

export default App;
