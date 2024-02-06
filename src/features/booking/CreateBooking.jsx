import { useParams } from 'react-router-dom';
import useSearchParamsFromUrl from '../../hooks/useSearchParamsFromUrl';
import LoginForm from '../auth/LoginForm';
import SignupModal from '../auth/SignupModal';
import useUser from '../auth/hooks/useUser';
import useCreateBooking from './hooks/useCreateBooking';
import { getDifferenceInDays } from '../../utils/helper';

export default function CreateBooking({ pricePerNight }) {
  const { user, isLoading } = useUser();

  const { createBooking, isBooking } = useCreateBooking();

  const { placeId } = useParams();

  const { startDate, endDate, numAdults, numChildren, numInfants } =
    useSearchParamsFromUrl();

  if (isLoading) return null;

  const handleCreateBooking = async () => {
    if (isBooking) return;

    const totalAmount = pricePerNight * getDifferenceInDays(startDate, endDate);
    const booking = {
      placeId,
      startDate,
      endDate,
      numAdults,
      numChildren,
      numInfants,
      totalAmount,
    };
    createBooking(booking);
  };

  if (user)
    return (
      <>
        <p className="text-sm mb-6">
          By selecting the button below, I agree to the
          <span className="font-medium">Host's House Rules </span>and
          <span className="font-medium">Guest's Terms of Service</span>.
        </p>
        <button
          onClick={handleCreateBooking}
          disabled={isBooking}
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
