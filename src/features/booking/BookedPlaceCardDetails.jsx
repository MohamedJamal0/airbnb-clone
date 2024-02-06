import { FaStar } from 'react-icons/fa';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { getDifferenceInDays } from '../../utils/helper';

export default function BookedPlaceCardDetails({
  cover_image,
  type,
  title,
  avg_rating,
  num_reviews,
  price_per_night,
  startDate,
  endDate,
  error,
  min_nights,
  max_guests,
}) {
  const numberOfNights = getDifferenceInDays(startDate, endDate);

  const errorMessage = {
    notAvailable: ` It looks like someone else just requested a reservation for the same
        dates. If you’re set on this place, change your trip dates and try
        again.`,
    exceedsMaxGuests: `The maximum number of guests allowed is ${max_guests}.`,
    belowMinNights: `This host requires a ${min_nights}-night minimum stay. To book, change your dates so you’re staying for at least that many nights.`,
  };

  return (
    <div className="p-6 lg:absolute lg:right-0 lg:w-[80%] rounded-md border">
      <div className="flex flex-wrap gap-2 pb-6 border-b">
        <img className=" w-32 h-24 rounded-md" src={cover_image} alt="" />
        <div className="flex flex-col">
          <div className="text-xs text-gray-400">{type}</div>
          <div className="text-sm">{title}</div>
          <div className="flex-1 flex items-end gap-1 text-sm  ">
            <div className="flex items-center gap-1">
              <FaStar className="w-3 h-3" />
              <span className="font-medium">{avg_rating?.toFixed(2)}</span>
              <span className="text-gray-400">{`(${num_reviews} reviews)`}</span>
            </div>
          </div>
        </div>
      </div>
      {!error && (
        <div>
          <div className="pb-6 border-b">
            <h2 className="my-6 text-xl font-medium">Price details</h2>
            <div className="flex justify-between">
              <div>{`$${price_per_night} x ${numberOfNights} nights`}</div>
              <div>${price_per_night * numberOfNights}</div>
            </div>
          </div>
          <div className="flex justify-between items-center py-4 font-medium   ">
            <div>Total</div>
            <div>${price_per_night * numberOfNights}</div>
          </div>
        </div>
      )}
      {error && (
        <div className="text-sm text-gray-600 font-medium my-6">
          <IoAlertCircleOutline className="w-8 h-8 mx-auto my-4" />
          <p className="text-center px-12">{errorMessage[error]}</p>
        </div>
      )}
    </div>
  );
}
