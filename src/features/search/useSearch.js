import { addDays, format } from 'date-fns';
import { useState } from 'react';
import useSearchParamsFromUrl from '../../hooks/useSearchParamsFromUrl';

export default function useSearch() {
  const {
    city,
    startDate,
    endDate,
    numAdults,
    numChildren,
    numInfants,
    updateUrlSearchParams,
  } = useSearchParamsFromUrl();

  const [searchParams, setSearchParams] = useState({
    city,
    startDate,
    endDate,
    numAdults,
    numChildren,
    numInfants,
  });

  const updateSearchParams = (value) => {
    setSearchParams({ ...searchParams, ...value });
  };

  const handleSearchSubmit = () => {
    // at case the user does not select the end date , we add 1 day to the start date
    if (
      searchParams.startDate &&
      searchParams.startDate === searchParams.endDate
    ) {
      const nextDay = addDays(new Date(searchParams.startDate), 1);
      searchParams.endDate = format(nextDay, 'yyyy-MM-dd');
    }

    updateUrlSearchParams(searchParams);
  };

  return { searchParams, updateSearchParams, handleSearchSubmit };
}
