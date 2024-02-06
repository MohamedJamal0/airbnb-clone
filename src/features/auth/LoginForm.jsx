import Input from '../../components/ui/Input';
import useLogin from './hooks/useLogin';

export default function LoginForm() {
  const { login, isLoading, error } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    login({ email, password });
  };

  return (
    <form onSubmit={handleLogin} className=" flex flex-col gap-2 mb-4">
      <Input
        id={'email'}
        type="email"
        name="email"
        label="Email"
        disabled={isLoading}
        required
        autoFocus
      />
      <Input
        id={'password'}
        type="password"
        name="password"
        label="Password"
        disabled={isLoading}
        required
      />

      {error && <p className="mb-1 text-red-500">email or password is wrong</p>}

      <button
        disabled={isLoading}
        className=" py-3 rounded-md font-medium bg-pink-500 text-white "
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}
