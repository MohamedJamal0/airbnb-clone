import { createContext, useContext } from 'react';
import { createPortal } from 'react-dom';

const ModalContext = createContext({});

const Modal = ({ children, onChange, open }) => {
  const value = {
    open,
    onChange,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

function Open({ children, ...props }) {
  const { onChange } = useContext(ModalContext);

  return (
    <button {...props} onClick={onChange}>
      {children}
    </button>
  );
}

export function Window({ children }) {
  const { open, onChange } = useContext(ModalContext);
  if (!open) return null;

  return createPortal(
    <div>
      <div
        onClick={onChange}
        className=" fixed left-0 top-0 w-full h-screen bg-black opacity-40  z-50"
      ></div>
      <div className=" fixed z-[60]  top-1/2 left-1/2  py-4   rounded-md shadow-md slide-top bg-white ">
        {children}
      </div>
    </div>,
    document.body
  );
}

function Header({ children, ...props }) {
  const { onChange } = useContext(ModalContext);
  return (
    <div
      className="flex items-center justify-between px-4 pb-2 border-b"
      {...props}
    >
      <button
        className=" flex items-center justify-center w-10 h-10 hover:bg-zinc-50 duration-200 rounded-full"
        onClick={onChange}
      >
        X
      </button>
      <div className=" text-2xl font-medium">{children}</div>
      <div className="w-10 h-0"></div>
    </div>
  );
}

function Body({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export default Modal;

Modal.Open = Open;
Modal.Header = Header;
Modal.Window = Window;
Modal.Body = Body;
