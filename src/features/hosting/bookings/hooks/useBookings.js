import { useQuery } from '@tanstack/react-query';
import { getHostBookings } from '../services/index';
import { useSearchParams } from 'react-router-dom';
import useUser from '../../../auth/hooks/useUser';
export default function useBookings() {
  const [urlSearchParams] = useSearchParams();

  const {
    user: { hostId },
  } = useUser();

  const status = urlSearchParams.get('status') || 1;
  const page = urlSearchParams.get('page') || 1;

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings', status, page, hostId],
    queryFn: () => getHostBookings({ status, page, hostId }),
  });

  return { bookings, isLoading };
}
