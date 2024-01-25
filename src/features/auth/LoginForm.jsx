import Input from '../../components/ui/Input';
import useLogin from './useLogin';

export default function LoginForm({ callback }) {
  const { login, isLoading } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    login({ email, password }).then(() => callback());
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
      />
      <Input
        id={'password'}
        type="password"
        name="password"
        label="Password"
        disabled={isLoading}
        required
      />
      <button
        disabled={isLoading}
        className=" py-3 rounded-md font-medium bg-pink-500 text-white "
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}
