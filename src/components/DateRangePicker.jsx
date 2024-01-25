import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { differenceInDays } from 'date-fns';
import { getIndividualDates } from '../utils/helper';
import useIsMobile from '../hooks/useIsMobile';

export default function DateRangePicker({
  value,
  onChange,
  minDays,
  disabledDates = [],
  ...props
}) {
  const { startDate, endDate } = value;

  const {isMobile} = useIsMobile()

  const handleDateChange = (item) => {
    let { startDate, endDate } = item.selection;

    if (startDate !== endDate && differenceInDays(endDate, startDate) < minDays)
      return alert('select at least 5 days');
    onChange({
      startDate: format(startDate, 'yyyy-MM-dd'),
      endDate: endDate && format(endDate, 'yyyy-MM-dd'),
    });
  };

  const state = [
    {
      startDate: startDate ? new Date(startDate) : new Date(),
      endDate: endDate ? new Date(endDate) : new Date(),
      key: 'selection',
    },
  ];

  const dates = getIndividualDates(disabledDates);

  return (
    <DateRange
      className="w-full text-[16px]"
      px
      minDate={new Date()}
      editableDateInputs={true}
      showDateDisplay={false}
      onChange={handleDateChange}
      moveRangeOnFirstSelection={false}
      ranges={state}
      rangeColors={['black']}
      months={1}
      direction="horizontal"
      disabledDates={dates}
      {...props}
    />
  );
}
