import { IoIosAlert } from 'react-icons/io';

export default function BookedPlaceErrorBox({ errorType }) {
  const message = {
    notAvailable: {
      heading: 'This place is no longer available',
      text: ' Edit your dates to get updated pricing or search for another place to stay.',
    },
    exceedsMaxGuests: {
      heading: 'Reduce the guest count to continue',
      text: 'Edit your guest count or search for another place to stay.',
    },
    belowMinNights: {
      heading: 'The minimum number of nights has changed',
      text: 'Edit your dates or search for another place to stay.',
    },
  };

  return (
    <div className=" flex  gap-5 p-5 border rounded-md ">
      <IoIosAlert className="w-14 h-14 text-red-600" />
      <div>
        <h3 className="font-medium">{message[errorType].heading}</h3>
        <p>{message[errorType].text}</p>
      </div>
    </div>
  );
}
