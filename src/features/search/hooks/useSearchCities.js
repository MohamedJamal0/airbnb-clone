import { useQuery } from '@tanstack/react-query';

import { searchCities as searchCitiesApi } from '../services';

export default function useSearchCities(search) {
  const {
    data: cities,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cities', search],
    queryFn: () => searchCitiesApi(search),
  });

  return { cities, isLoading, error };
}
