import {
  differenceInDays,
  addDays,
  format,
  isAfter,
  isSameDay,
} from 'date-fns';

export function getIndividualDates(disabledDates) {
  const individualDates = [];

  disabledDates.forEach((dateRange) => {
    const { startDate, endDate } = dateRange;

    const _startDate = new Date(startDate);
    const _endDate = new Date(endDate);

    const daysDifference = differenceInDays(_endDate, _startDate);

    for (let i = 0; i <= daysDifference; i++) {
      const currentDate = addDays(_startDate, i);
      individualDates.push(currentDate);
    }
  });

  return individualDates;
}

export function getDifferenceInDays(startDate, endDate) {
  return differenceInDays(new Date(endDate), new Date(startDate));
}

export function formatDate(date, option) {
  return format(new Date(date), option);
}

export function isSameDayOrAfter(date1, date2) {
  return (
    isSameDay(new Date(date1), new Date(date2)) ||
    isAfter(new Date(date1), new Date(date2))
  );
}
