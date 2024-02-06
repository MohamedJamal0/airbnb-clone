import { useQuery } from '@tanstack/react-query';
import { getHostPlaces } from '../services';
import useUser from '../../../auth/hooks/useUser';

export default function useHostPlaces() {
  const {
    user: { hostId },
  } = useUser();

  const { data: hostPlaces, isLoading } = useQuery({
    queryKey: ['hostPlaces', hostId],
    queryFn: () => getHostPlaces(hostId),
  });

  return { hostPlaces, isLoading };
}
