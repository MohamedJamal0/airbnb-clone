import { useQuery } from '@tanstack/react-query';
import { getStaysCounts } from '../services';
import useUser from '../../../auth/hooks/useUser';

export default function useGetStaysCounts() {
  const {
    user: { hostId },
  } = useUser();
  const { data: staysCounts, isLoading: isStaysCountsLoading } = useQuery({
    queryKey: ['staysCounts', hostId],
    queryFn: () => getStaysCounts(hostId),
  });
  return { staysCounts, isStaysCountsLoading };
}
