import useUser from './useUser';
import Menu from '../../components/ui/Menu';
import LoginModal from './LoginModal';
import Logout from './Logout';
import SignupModal from './SignupModal';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUser } from 'react-icons/fa6';

export default function UserMenu() {
  const { isLoading, user } = useUser();

 
  if (isLoading) {
    return (
      <div className="flex justify-between gap-1 w-20  px-3 py-1  border rounded-full shadow-sm "></div>
    );
  }

  if (user) {
    return (
      <Menu>
        <Menu.Open className="flex justify-between items-center  w-20 px-3 py-2  border rounded-full shadow-sm ">
          <RxHamburgerMenu />
          <div className="flex justify-center items-center w-7 h-7 rounded-full text-sm bg-black text-white ">
            {user.email[0].toUpperCase()}
          </div>
        </Menu.Open>
        <Menu.List className={' w-48 py-1'}>
          <Menu.item>
            <Link className="px-4 py-2 inline-block" to={'/profile'}>
              Reservation
            </Link>
          </Menu.item>
          {user.isHost && (
            <Menu.item>
              <Link className="px-4 py-2 inline-block" to={'/hosting/today'}>
                Swith to hosting
              </Link>
            </Menu.item>
          )}
          <Menu.item>
            <Logout />
          </Menu.item>
        </Menu.List>
      </Menu>
    );
  }

  if (!user) {
    return (
      <Menu>
        <Menu.Open className="flex justify-between items-center w-20 px-3 py-2  border rounded-full shadow-sm ">
          <RxHamburgerMenu />
          <div className="flex justify-center items-center w-7 h-7 rounded-full text-sm bg-gray-500 text-white ">
            <FaUser />
          </div>
        </Menu.Open>
        <Menu.List className={' w-48 py-1'}>
          <Menu.item>
            <LoginModal />
          </Menu.item>
          <Menu.item>
            <SignupModal />
          </Menu.item>
        </Menu.List>
      </Menu>
    );
  }
}
