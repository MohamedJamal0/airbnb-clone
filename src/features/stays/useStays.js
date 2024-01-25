import { useQuery } from '@tanstack/react-query';
import {
  getUpcomingStays,
  getArrivingStays,
  getLeavingStays,
  getCurrentStays,
} from '../../services/apiStays';

export default function useStays(filter) {
  const {
    data: stays,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['stays', filter],
    queryFn: () => {
      switch (filter) {
        case 'Upcoming':
          return getUpcomingStays();
        case 'Arriving soon':
          return getArrivingStays();
        case 'Currently hosting':
          return getCurrentStays();
        case 'Cheking out':
          return getLeavingStays();
        default:
          return [];
      }
    },
    staleTime: Infinity,
  });

  return { stays, isLoading, error };
}
