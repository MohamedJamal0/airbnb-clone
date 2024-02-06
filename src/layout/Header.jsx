import Logo from '../components/Logo';
import SearchTrigger from '../features/search/SearchTrgger';
import Searchbar from '../features/search/Searchbar';
import useToggle from '../hooks/useToggle';
import { useEffect } from 'react';
import UserMenu from '../features/auth/UserMenu';
import useUser from '../features/auth/hooks/useUser';
import { Link } from 'react-router-dom';

const Header = () => {
  const { toggle, handleToggle } = useToggle();

  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && toggle) {
        handleToggle();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toggle, handleToggle]);

  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full  border-b transition-all duration-600  bg-white aria-expanded:h-44"
        aria-expanded={toggle}
      >
        <div className="flex items-center h-20 px-[5%] gap-[2%]">
          <div className="lg:flex-1 hidden md:block">
            <Logo />
          </div>
          <div className="flex-1  flex justify-center">
            {toggle && <Searchbar onClose={handleToggle} />}
            {!toggle && <SearchTrigger onToggle={handleToggle} />}
          </div>
          <div className="flex-1 justify-end flex items-center gap-4">
            <div className="font-medium hidden md:block ">
              {(!user || !user.isHost) && (
                <Link
                  className="px-4 py-2 rounded-full hover:bg-slate-100 duration-200"
                  to={'/host/homes'}
                >
                  Airbnb your home
                </Link>
              )}
              {user?.isHost && (
                <Link
                  className="px-4 py-2 rounded-full hover:bg-slate-100 duration-200"
                  to={'/hosting/today'}
                >
                  Switch to hosting
                </Link>
              )}
            </div>
            <UserMenu />
          </div>
        </div>
      </header>
      {toggle && (
        <div
          onClick={handleToggle}
          className="fixed left-0 top-0 w-full h-screen bg-black bg-opacity-30 fade-in z-20"
        ></div>
      )}
    </>
  );
};

export default Header;
