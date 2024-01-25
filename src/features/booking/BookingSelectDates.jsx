import { useParams } from 'react-router-dom';
import DateRangePicker from '../../components/DateRangePicker';

import usePlaceBookedDates from './usePlaceBookedDates';
import useSearchParamsFromUrl from '../../hooks/useSearchParamsFromUrl';
import { useState } from 'react';

import { getDifferenceInDays } from '../../utils/helper';

export default function BookingSelectDates({ min_nights }) {
  const { placeId } = useParams();
  const { placeBookedDates } = usePlaceBookedDates(+placeId);

  const { startDate, endDate, updateUrlSearchParams } =
    useSearchParamsFromUrl();
  const [dates, setDates] = useState({ startDate, endDate });

  const handleDateChange = ({ startDate, endDate }) => {
    setDates({ startDate, endDate });
    if (startDate && endDate && startDate !== endDate) {
      updateUrlSearchParams({ startDate, endDate });
    }
  };

  let heading;
  let caption;

  if (!dates.startDate && !dates.endDate) {
    heading = 'Select check-in date';
    caption = 'Add your travel dates for exact pricing';
  }
  if (dates.startDate && dates.startDate === dates.endDate) {
    heading = 'Select check-out date';
    caption = `Minimum stay: ${min_nights} nights`;
  }

  if (dates.startDate && dates.endDate && dates.startDate !== dates.endDate) {
    heading = `${getDifferenceInDays(startDate, endDate)} nights`;
    caption = `${startDate} - ${endDate}`;
  }

  return (
    <div className="py-12">
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-1">{heading}</h2>
        <p className="text-gray-500">{caption}</p>
      </div>
      <DateRangePicker
        value={dates}
        onChange={handleDateChange}
        minDays={min_nights}
        disabledDates={placeBookedDates}
      />
    </div>
  );
}
