import { useQuery } from '@tanstack/react-query';

import { getPlaceBookedDates } from '../services/index';

export default function usePlaceBookedDates(placeId) {
  const { data: placeBookedDates, isLoading } = useQuery({
    queryKey: ['hostPlaces'],
    queryFn: () => getPlaceBookedDates(placeId),
  });

  return { placeBookedDates, isLoading };
}
