import { formatDate } from '../../utils/helper';
export default function BookedPlaceTripDetails({
  startDate,
  endDate,
  totalGuests,
  min_nights,
  max_guests,
  error,
}) {
  const formattedStartDate = formatDate(startDate, 'dd MMM');
  const formattedEndDate = formatDate(endDate, 'dd MMM');
  return (
    <div className="mt-8">
      <h2 className="mb-6 font-medium text-xl">Your Trip</h2>
      <div className="mb-6">
        <div className=" mb-1 font-medium">Dates</div>
        <div className="text-gray-600">{`${formattedStartDate} - ${formattedEndDate}`}</div>
        {error === 'belowMinNights' && (
          <div className="text-red-500 text-xs mt-1">{`The minimum number of nights is ${min_nights}.`}</div>
        )}

        {error === 'notAvailable' && (
          <div className="text-red-500 text-xs mt-1">
            This Dates is no longer available
          </div>
        )}
      </div>
      <div className="mb-6">
        <div className="font-medium">Guests</div>
        <div className="text-gray-600"> {totalGuests} guest</div>
        {error === 'exceedsMaxGuests' && (
          <div className="text-red-500 text-xs mt-1">{`The maximum number of guests allowed is ${max_guests}.`}</div>
        )}
      </div>
    </div>
  );
}
