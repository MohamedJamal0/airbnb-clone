import { useState } from 'react';
import useSearchParamsFromUrl from '../../hooks/useSearchParamsFromUrl';

export default function usePlacesFilter() {
  const {
    minPrice,
    maxPrice,
    type,
    category,
    amenities,
    updateUrlSearchParams,
  } = useSearchParamsFromUrl();

  const [filter, setFilter] = useState({
    minPrice,
    maxPrice,
    type,
    category,
    amenities: amenities ? amenities : [],
  });

  const handleUpateFilter = ({ key, value }) => {
    // if (key === 'minPrice' && value > filter.maxPrice) {
    //   return setFilter((prev) => ({
    //     ...prev,
    //     minPrice: +prev.maxPrice - 5,
    //   }));
    // }
    // if (key === 'maxPrice' && value < filter.minPrice) {
    //   return setFilter((prev) => ({
    //     ...prev,
    //     maxPrice: +prev.minPrice + 5,
    //   }));
    // }
    if (key === 'amenities') {
      return setFilter((prev) => ({
        ...prev,
        amenities: prev.amenities.includes(value)
          ? prev.amenities.filter((item) => item !== value)
          : [...prev.amenities, value],
      }));
    }
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilter = () => {
    setFilter({
      minPrice: 10,
      maxPrice: 560,
      amenities: [],
      type: '',
    });
  };

  const handleFilter = () => updateUrlSearchParams(filter);

  return { filter, handleUpateFilter, handleFilter, handleResetFilter };
}
