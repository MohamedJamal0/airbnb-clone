import { useQuery } from '@tanstack/react-query';
import {
  getUpcomingStays,
  getArrivingStays,
  getLeavingStays,
  getCurrentStays,
} from '../services';
import useUser from '../../../auth/hooks/useUser';

export default function useStays(filter) {
  const {
    user: { hostId },
  } = useUser();
  const {
    data: stays,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['stays', filter, hostId],
    queryFn: () => {
      switch (filter) {
        case 'Upcoming':
          return getUpcomingStays(hostId);
        case 'Arriving soon':
          return getArrivingStays(hostId);
        case 'Currently hosting':
          return getCurrentStays(hostId);
        case 'Cheking out':
          return getLeavingStays(hostId);
        default:
          return [];
      }
    },
    staleTime: 0,
  });

  return { stays, isLoading, error };
}
