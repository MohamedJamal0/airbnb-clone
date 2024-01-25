import { useQuery } from '@tanstack/react-query';
import { getHostBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
export default function useBookings() {
  const [urlSearchParams] = useSearchParams();

  const status = urlSearchParams.get('status') || 1;
  const page = urlSearchParams.get('page') || 1;

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings', status, page],
    queryFn: () => getHostBookings({ status, page, hostId: 1 }),
  });
  return { bookings, isLoading };
}
