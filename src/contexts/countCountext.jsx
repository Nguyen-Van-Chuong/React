import { createContext, useContext, useState } from "react";

const CountContext = createContext();
// import Modal from "./components/Modal/Modal";
// import DropdownPortal from "./components/DropdownPortal";
// import Toolstip from "./components/tooltip/ToolsTip";
// import Portal from "./components/Portal";
// import ModalBase from "./components/Modal/ModalBase";
// import ModalAdvanced from "./components/Modal/ModalAdvanced";
// import TooltipAdvanced from "./components/tooltip/TooltipAdvanced";
// import Toolstip from "./components/tooltip/ToolsTip";
// import RegisterFormik from "./components/form/RegisterFormik";
// import RegisterHook from "./components/form/RegisterHook";
function CountProvider(props) {
  const [count, setCount] = useState(1);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}
function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a CountProvider");
  return context;
}
export { CountProvider, useCount };
