import { useQuery } from '@tanstack/react-query';

import { getCitybyLatLong } from '../services/apiCitites';
export default function useCity({ lat, long }) {
  const { data, isLoading: isLoadingCity } = useQuery({
    queryKey: ['city', lat, long],
    queryFn: () => getCitybyLatLong({ lat, long }),
  });

  return { data, isLoadingCity };
}
