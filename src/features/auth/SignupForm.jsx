import Input from '../../components/ui/Input';
import useSignup from './useSignup';

export default function SignupForm() {
  const { signup, isLoading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');

    await signup({ firstName, lastName, email, password });
  };
  return (
    <form className="py-4 px-6 w-[30vw]" onSubmit={handleSubmit}>
      <Input type={'text'} label={'firstName'} name={'firstName'} required />
      <Input type={'text'} label={'lastName'} name={'lastName'} required />
      <Input type={'email'} label={'Email'} name={'email'} required />
      <Input type={'password'} label={'Password'} name={'password'} required />
      <button
        disabled={isLoading}
        className="w-full py-4 rounded-md bg-black text-white"
      >
        {isLoading ? 'Loading...' : 'Sign up'}
      </button>
    </form>
  );
}

//
