import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import UserMenu from '../features/auth/UserMenu';

export default function HostingHeader() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b bg-white">
      <div className="flex justify-between items-center h-16 px-[2%]  outside">
        <Logo />
        <ul className="flex gap-2">
          {['today', 'places', 'bookings'].map((link) => (
            <li key={link}>
              <NavLink
                className={(active) =>
                  `px-5 py-2 rounded-full duration-200 hover:bg-slate-100 ${
                    active ? '' : ''
                  }`
                }
                to={`/hosting/${link}`}
              >
                {link[0].toUpperCase() + link.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
        <UserMenu />
      </div>
    </header>
  );
}
