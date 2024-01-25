import { createContext, useState, useContext } from 'react';
import useClickOutSide from '../../hooks/useClickOutside';

const MenuContext = createContext({});
const Menu = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <MenuContext.Provider
      value={{ handleOpen, isOpen, handleClose, handleToggle }}
    >
      <div className={` relative ${className ? className : ''}`}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;

const Open = ({ children, ...props }) => {
  const { handleClose, handleToggle } = useContext(MenuContext);
  const { ref } = useClickOutSide(handleClose);
  return (
    <button ref={ref} onClick={handleToggle} {...props}>
      {children}
    </button>
  );
};

const List = ({ children, ...props }) => {
  const { isOpen } = useContext(MenuContext);

  const styles =
    `mt-8  absolute top-5 right-0 border  rounded-md bg-white shadow-lg z-10${
      isOpen ? 'opacity-100' : ' opacity-0 pointer-events-none '
    }` + props.className;

  return <ul className={styles}>{children}</ul>;
};

const item = ({ children, ...props }) => {
  return (
    <li className=" hover:bg-slate-100 cursor-pointer *:w-full" {...props}>
      {children}
    </li>
  );
};

Menu.Open = Open;
Menu.List = List;
Menu.item = item;
