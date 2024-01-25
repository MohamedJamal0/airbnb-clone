import { isSameDayOrAfter } from '../../utils/helper';
import { formatDistanceToNow } from 'date-fns';
import { useCheckin } from './useCheckin';
import { useCheckout } from './useCheckout';

export default function CheckInOutButton({
  checkinDate,
  checkoutDate,
  status,
  id,
}) {
  const isCheckedOut =
    isSameDayOrAfter(new Date(), checkoutDate) && status === 'checked_in';

  const isCheckedIn =
    isSameDayOrAfter(new Date(), checkinDate) &&
    !isCheckedOut &&
    status === 'confirmed';

  const { checkin, isCheckingIn } = useCheckin();

  const { checkout, isCheckingOut } = useCheckout();
  const timeAgo = formatDistanceToNow(new Date(checkinDate), {
    addSuffix: true,
  });

  if (isCheckedIn)
    return (
      <button
        onClick={() => checkin(id)}
        disabled={isCheckingIn}
        className="px-4 py-2 bg-black rounded-md  text-sm font-medium text-white"
      >
        Check in
      </button>
    );

  if (isCheckedOut)
    return (
      <button
        onClick={() => checkout(id)}
        disabled={isCheckingOut}
        className="px-4 py-2 bg-black rounded-md  text-sm font-medium text-white"
      >
        Check out
      </button>
    );

  if (!isCheckedIn && !isCheckedOut)
    return (
      <span className="px-3 py-2 rounded-md font-medium bg-gray-200 ">
        {timeAgo}
      </span>
    );
}
