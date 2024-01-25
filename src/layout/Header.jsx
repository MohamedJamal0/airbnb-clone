import Logo from '../components/Logo';
import SearchTrigger from '../features/search/SearchTrgger';
import Searchbar from '../features/search/Searchbar';
import useToggle from '../hooks/useToggle';
import IneedName from '../features/auth/UserMenu';

const Header = () => {
  const { toggle, handleToggle } = useToggle();

  return (
    <>
      <header
        className={` fixed top-0 left-0 z-50 w-full  border-b transition-all duration-600  bg-white   ${
          toggle ? 'h-44' : 'h-20'
        } `}
      >
        <div className="h-20 flex justify-between items-center gap-[2%] max-w-7xl mx-auto px-5 outside">
          <Logo />
          {toggle ? (
            <Searchbar onClose={handleToggle} />
          ) : (
            <SearchTrigger onToggle={handleToggle} />
          )}
          {<IneedName />}
        </div>
      </header>
    </>
  );
};

export default Header;
