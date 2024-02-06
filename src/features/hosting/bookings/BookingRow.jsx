import Table from '../../../components/Table';
import { formatDistanceToNow } from 'date-fns';

import { formatDate, getDifferenceInDays } from '../../../utils/helper';
import CheckInOutButton from '../stays/CheckInOutButton';

export default function BookingRow({ booking }) {
  const {
    checkin_date,
    checkout_date,
    total_amount,
    num_adults,
    num_children,
    num_infants,
    user: { first_name, last_name },
    place: { title },
    booking_status: { status },
  } = booking;

  const formattedStartDate = formatDate(checkin_date, 'MMM dd yyyy');
  const formattedEndDate = formatDate(checkout_date, 'MMM dd yyyy');
  const numberOfNights = getDifferenceInDays(checkin_date, checkout_date);

  return (
    <Table.Row>
      <div role="cell">{title}</div>
      <div className="flex flex-col" role="cell">
        <span>{`${first_name} ${last_name}`}</span>
        <span className="text-gray-400 text-sm">
          {num_adults} adult, {num_children} children, {num_infants} infants
        </span>
      </div>
      <div role="cell" className="flex flex-col">
        <span>{`${numberOfNights} night stay`}</span>
        <span className="text-gray-400 text-xs">
          {formattedStartDate} - {formattedEndDate}
        </span>
      </div>
      <div role="cell" className="uppercase text-sm">
        {status}
      </div>
      <div role="cell">{total_amount}</div>
      <div role="cell">
        <CheckInOutButton
          checkinDate={checkin_date}
          checkoutDate={checkout_date}
          status={status}
          id={booking.id}
        />
      </div>
    </Table.Row>
  );
}
