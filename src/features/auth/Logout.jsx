import useLogout from './hooks/useLogout';

export default function Logout() {
  const { logout } = useLogout();
  return (
    <button onClick={logout} className="w-full text-left px-4 py-2">
      Logout
    </button>
  );
}
