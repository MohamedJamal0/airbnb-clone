import { formatDate } from '../../utils/helper';
import { formatDistanceToNow } from 'date-fns';
import ReviewModal from '../reviews/ReviewModal';

export default function TripCard({ trip }) {
  const timeAgo = formatDistanceToNow(new Date(trip.checkin_date), {
    addSuffix: true,
  });

  const formattedCheckinDate = formatDate(trip.checkin_date, ' MMM dd ,yyy');
  const formattedCheckoutDate = formatDate(trip.checkout_date, 'MMM dd ,yyy');

  return (
    <div className="flex flex-col-reverse md:flex-row  max-w-4xl  rounded-md shadow-md overflow-hidden">
      <div className="flex-1 p-8">
        <h3 className="text-lg font-medium">{trip.place_title}</h3>
        <p className="text-gray-500 pb-4 border-b">
          {trip.place_type} hosted by {trip.host_first_name}
          {trip.host_last_name}
        </p>
        <div className="py-4 flex gap-6 border-b">
          <div>
            <p className="text-lg">{formattedCheckinDate}</p>
            <p className="text-gray-500 font-medium">To</p>
            <p className="text-lg">{formattedCheckoutDate}</p>
          </div>
          <div className=" border-r"></div>
          <div className="text-lg">
            {trip.city} ,{trip.country}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="inline-block  px-4 py-2 font-medium rounded-md bg-slate-200">
            {trip.booking_status}
          </span>
          {trip.booking_status === 'checked_out' && (
            <ReviewModal
              rating={trip.review_rating}
              bookingId={trip.booking_id}
              placeId={trip.place_id}
            />
          )}
        </div>
      </div>
      <div className="relative flex-1">
        <img
          src={trip.place_cover_image}
          alt=""
          className="w-full h-full aspect-video object-cover"
        />
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md font-medium">
          {timeAgo}
        </div>
      </div>
    </div>
  );
}
