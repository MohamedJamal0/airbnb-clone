import { useSearchParams } from 'react-router-dom';

export default function useSearchParamsFromUrl() {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  const city = urlSearchParams.get('city') || null;
  const startDate = urlSearchParams.get('startDate') || null;
  const endDate = urlSearchParams.get('endDate') || null;
  const numAdults = +urlSearchParams.get('numAdults') || 0;
  const numChildren = +urlSearchParams.get('numChildren') || 0;
  const numInfants = +urlSearchParams.get('numInfants') || 0;
  const maxPrice = +urlSearchParams.get('maxPrice') || null;
  const minPrice = +urlSearchParams.get('minPrice') || null;
  const type = urlSearchParams.get('type') || null;
  const category = urlSearchParams.get('category') || null;
  const amenities =
    urlSearchParams.getAll('amenities').length !== 0
      ? urlSearchParams.getAll('amenities')
      : null;

  const updateUrlSearchParams = (data) => {
    for (let k in data) {
      urlSearchParams.delete(k);
      if (!data[k] || data[k] === '0') continue;

      if (Array.isArray(data[k]))
        data[k].forEach((k) => urlSearchParams.append('amenities', k));
      else urlSearchParams.set(k, data[k]);
    }
    setUrlSearchParams(urlSearchParams);
  };

  return {
    city,
    startDate,
    endDate,
    numAdults,
    numChildren,
    numInfants,
    maxPrice,
    minPrice,
    type,
    category,
    amenities,
    updateUrlSearchParams,
  };
}
