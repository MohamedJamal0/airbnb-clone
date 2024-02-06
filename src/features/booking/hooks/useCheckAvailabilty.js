import { checkAvailability as checkAvailabilityApi } from '../services/index';
import { useQuery } from '@tanstack/react-query';

export default function useCheckAvailabilty({ placeId, startDate, endDate }) {
  const { data: isAvailable, isLoading } = useQuery({
    queryKey: ['availability', startDate, endDate, placeId],
    queryFn: () => checkAvailabilityApi({ placeId, startDate, endDate }),
  });

  return { isAvailable, isLoading };
}
