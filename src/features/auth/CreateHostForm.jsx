import Input from '../../components/ui/Input';
import useCreateHost from './hooks/useCreateHost';

export default function CreateHostForm() {
  const { createHost, isLoading } = useCreateHost();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const mobileNumber = formData.get('mobile number');
    const country = formData.get('country');
    const address = formData.get('address');
    const overview = formData.get('overview');

    await createHost({ mobileNumber, country, address, overview });
  };

  return (
    <form className="w-[80%]" onSubmit={handleSubmit}>
      <Input
        label={'mobile number'}
        id={'mobile number'}
        name={'mobile number'}
        required
      />
      <Input label={'country'} id={'country'} name={'country'} required />
      <Input label={'address'} id={'address'} name={'address'} required />

      <label className="mb-3 block font-medium text-lg" htmlFor="overview">
        Tell us about your self
      </label>
      <textarea
        className="w-full  h-28 mb-2 p-3 rounded-md border border-gray-500 focus:ring focus:outline-none  bg-transparent"
        name="overview"
        id="overview"
        required
      ></textarea>
      <button
        disabled={isLoading}
        className="w-full px-4 py-6 rounded-md bg-black text-white"
      >
        Get started
      </button>
    </form>
  );
}
