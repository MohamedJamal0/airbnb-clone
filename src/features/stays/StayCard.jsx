import { formatDate, getDifferenceInDays } from '../../utils/helper';
import { formatDistanceToNow } from 'date-fns';

export default function StayCard({ stay }) {
  const { place, user, checkin_date: checkIn, checkout_date: checkOut } = stay;

  const numberOfNights = getDifferenceInDays(checkIn, checkOut);

  const timeAgo = formatDistanceToNow(new Date(checkIn), {
    addSuffix: true,
  });

  return (
    <div className="w-[300px] border rounded-md overflow-hidden">
      <div className="p-4">
        <div className="mb-4">
          <h3 className="mb-1 font-medium text-lg">{place.title}</h3>
          <span>{`${user.first_name} ${user.last_name}`}</span>
          <span className="text-gray-500">+ 2 guests</span>
        </div>
        <div className="mb-2">
          <div className="mb-1 ">{`${timeAgo} - ${numberOfNights} nights`}</div>
          <div>{`${formatDate(checkIn, 'MMM dd')} - ${formatDate(
            checkOut,
            'MMM dd'
          )}`}</div>
        </div>
      </div>
    </div>
  );
}
