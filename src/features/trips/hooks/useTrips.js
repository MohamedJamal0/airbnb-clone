import { useQuery } from '@tanstack/react-query';
import { getUserTrips } from '../services';

export default function useTrips() {
  const { data: trips, isFetching: isLoading } = useQuery({
    queryKey: ['trips'],
    queryFn: getUserTrips,
  });

  return { trips, isLoading };
}
