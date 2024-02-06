import { FaChevronLeft } from 'react-icons/fa';
import Logo from '../components/Logo';
import CreateBooking from '../features/booking/CreateBooking';
import { getDifferenceInDays } from '../utils/helper';
import useSearchParamsFromUrl from '../hooks/useSearchParamsFromUrl';
import useGetBookedPlaceDetails from '../features/booking/hooks/useGetBookedPlaceDetails';
import Loading from '../components/ui/Loading';
import { useEffect, useState } from 'react';
import BookedPlaceErrorBox from '../features/booking/BookedPlaceErrorBox';
import BookedPlaceTripDetails from '../features/booking/BookedPlaceTripDetails';
import BookedPlaceCardDetails from '../features/booking/BookedPlaceCardDetails';
import {
  useNavigate,
  useParams,
  createSearchParams,
  useSearchParams,
} from 'react-router-dom';

export default function BookingPage() {
  const { startDate, endDate, numAdults, numChildren, numInfants } =
    useSearchParamsFromUrl();

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [urlSearchParams] = useSearchParams();
  const { placeId } = useParams();

  const totalGuests = numAdults + numChildren + numInfants || 1;

  const { bookedPlaceDetails, isLoading } = useGetBookedPlaceDetails({
    startDate,
    endDate,
  });

  const handleNavigate = () => {
    navigate(`/places/${placeId}?${createSearchParams(urlSearchParams)}`);
  };

  useEffect(() => {
    if (!bookedPlaceDetails) return;

    const { is_available, max_guests, min_nights } = bookedPlaceDetails;
    const numberOfNights = getDifferenceInDays(startDate, endDate);

    if (!is_available) setError('notAvailable');

    if (totalGuests > max_guests) setError('exceedsMaxGuests');

    if (numberOfNights < min_nights) setError('belowMinNights');
  }, [bookedPlaceDetails]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen ">
        <Loading />
      </div>
    );

  return (
    <>
      <div className="flex items-center h-20 px-6 border-b">
        <Logo />
      </div>
      <div className="max-w-7xl py-16 px-[5%] mx-auto">
        <div className="flex items-center pb-8 ">
          <button
            onClick={handleNavigate}
            className="flex items-center justify-center w-12 h-12 -ml-12"
          >
            <FaChevronLeft />
          </button>
          <h1 className="font-medium text-3xl">Request to Book</h1>
        </div>
        <div className="flex flex-col-reverse gap-7  lg:flex-row lg:gap-0">
          <div className="flex-1">
            {error && <BookedPlaceErrorBox errorType={error} />}
            <BookedPlaceTripDetails
              error={error}
              startDate={startDate}
              endDate={endDate}
              totalGuests={totalGuests}
              {...bookedPlaceDetails}
            />
            {!error && (
              <CreateBooking
                pricePerNight={bookedPlaceDetails.price_per_night}
              />
            )}
          </div>
          <div className="relative flex-1 ">
            <BookedPlaceCardDetails
              error={error}
              startDate={startDate}
              endDate={endDate}
              {...bookedPlaceDetails}
            />
          </div>
        </div>
      </div>
    </>
  );
}
