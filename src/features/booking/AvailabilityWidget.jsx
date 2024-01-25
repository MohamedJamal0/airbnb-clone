import useSearchParamsFromUrl from '../../hooks/useSearchParamsFromUrl';

import BookingSelectGuests from './BookingSelectGuests';
import useCheckAvailabilty from './useCheckAvailabilty';
import { useNavigate, useParams } from 'react-router-dom';

export default function AvailabilityWidget({ pricePerNight, maxGuests }) {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const { startDate, endDate, numAdults, numChildren, numInfants } =
    useSearchParamsFromUrl();

  const { isAvailable } = useCheckAvailabilty({
    placeId,
    startDate,
    endDate,
  });

  const handleNavigate = () => {
    if (!isAvailable) return;

    navigate({
      pathname: `/book/${placeId}`,
      search: `?startDate=${startDate}&endDate=${endDate}&numAdults=${
        numAdults || 1
      }&numChildren=${numChildren}&numInfants=${numInfants}`,
    });
  };

  return (
    <div className="sticky top-24  left-0 p-6 mt-8 mb-12 shadow-xl rounded-md border bg-white">
      <div className="mb-6">
        <span className="font-medium text-xl">{`$${pricePerNight}`}</span>
        <span className="text-gray-500"> night</span>
      </div>
      <div className="shadow">
        <button className="flex w-full text-left rounded-t-md text-sm border border-gray-300 ">
          <div className="flex-1 border-r px-3 pt-2 pb-3 border-gray-300 ">
            <div className="text-xs">CHECK-IN</div>
            {startDate ? (
              <div>{startDate}</div>
            ) : (
              <div className="text-gray-500">Add Dates</div>
            )}
          </div>
          <div className="flex-1 border-r px-3 pt-2 pb-3 border-gray-300 ">
            <div className="text-xs">CHECK-OUT</div>
            {endDate ? (
              <div>{endDate}</div>
            ) : (
              <div className="text-gray-500">Add Dates</div>
            )}
          </div>
        </button>
        <BookingSelectGuests maxGuests={maxGuests} />
      </div>
      <button
        onClick={handleNavigate}
        disabled={!startDate || !endDate || !isAvailable}
        className="w-full py-4 mt-4 rounded-md font-medium bg-pink-500 text-white hover:bg-pink-400 duration-300"
      >
        {isAvailable ? 'Reserve' : 'check availability'}
      </button>
      <div className="mt-2 text-sm text-center text-gray-500">
        You won't be charged yet
      </div>
      <div className="flex justify-between mt-6">
        <div>$131 x 5 nights</div>
        <div>$654</div>
      </div>
      <div className="mt-5 py-5 border-t">
        <div className="flex justify-between font-medium">
          <div>Total</div>
          <div>$654</div>
        </div>
      </div>
    </div>
  );
}
