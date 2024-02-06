import useUser from '../../auth/hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import { getReview } from '../services';

export default function useReview({ bookingId }) {
  const {
    user: { id: userId },
  } = useUser();

  const { data: review, isFetching: isLoading } = useQuery({
    queryKey: ['review', userId, bookingId],
    queryFn: () => getReview({ bookingId, userId }),
  });

  return { review, isLoading };
}
