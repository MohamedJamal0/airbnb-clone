import { useState } from 'react';
import DateRangePicker from '../../components/DateRangePicker';
import useClickOutside from '../../hooks/useClickOutside';
import format from 'date-fns/format';

export default function DateSelector({ onChange, values }) {
  const { startDate, endDate } = values;
  const [isShow, setIsShow] = useState(false);
  const { ref } = useClickOutside(() => setIsShow(false));

  let dateToShow;

  if (!startDate) {
    dateToShow = 'Add dates';
  }

  if (startDate) {
    dateToShow = `${format(new Date(startDate), 'dd MMM')}`;
  }

  if (startDate && endDate && startDate !== endDate) {
    dateToShow = `${format(new Date(startDate), 'dd MMM')} - ${format(
      new Date(endDate),
      'dd MMM'
    )}`;
  }

  return (
    <div ref={ref} className="md:flex-1">
      <button
        onClick={() => setIsShow(!isShow)}
        className='w-full px-6 py-3 rounded-full text-left duration-100 hover:bg-gray-100'
      >
        <div className=" font-semibold block">Date</div>
        <div className=" text-gray-400">{dateToShow}</div>
      </button>
      {isShow && (
        <DateRangePicker
          onChange={onChange}
          value={{ startDate, endDate }}
          className="md:absolute mt-3 w-full right-0 p-8  rounded-3xl border shadow-2xl z-10 bg-white flex flex-col gap-4"
        />
      )}
    </div>
  );
}
