import LoginForm from '../auth/LoginForm';
import SignupModal from '../auth/SignupModal';
import useUser from '../auth/useUser';
import useCreateBooking from './useCreateBooking';
export default function CreateBooking({
  placeId,
  startDate,
  endDate,
  numAdults,
  numChildren,
  numInfants,
  totalAmount,
}) {
  const { user, isLoading } = useUser();
  const { CreateBooking } = useCreateBooking({ user });

  if (isLoading) return null;

  if (user)
    return (
      <>
        <p className="text-sm mb-6">
          By selecting the button below, I agree to the
          <span className="font-medium">Host's House Rules </span>and
          <span className="font-medium">Guest's Terms of Service</span>.
        </p>
        <button
          onClick={() =>
            CreateBooking({
              placeId,
              startDate,
              endDate,
              numAdults,
              numChildren,
              numInfants,
              totalAmount,
            })
          }
          className="w-full py-3 rounded-md font-medium bg-pink-500 text-white"
        >
          Book
        </button>
      </>
    );

  if (!user)
    return (
      <>
        <h2 className="mb-6 text-xl font-medium">Log in or sign up to book</h2>
        <LoginForm />
        <div className="text-sm flex items-center gap-2 ">
          if you don't have an account
          <div className="*:px-0 *:font-medium *:underline ">
            <SignupModal />
          </div>
        </div>
      </>
    );
}
