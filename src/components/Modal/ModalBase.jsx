import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";

// eslint-disable-next-line react/prop-types
const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      <CSSTransition in={visible} unmountOnExit timeout={250} classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="fixed z-[999] inset-0 flex items-center justify-center"
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={`${bodyClassName} z-10 relative content`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
