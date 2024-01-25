import { useQuery } from '@tanstack/react-query';
import { getHostPlaces } from '../../../services/apiPlaces';

export default function useHostPlaces(hostId) {
  const { data: hostPlaces, isLoading } = useQuery({
    queryKey: ['hostPlaces', hostId],
    queryFn: () => getHostPlaces(hostId),
  });

  return { hostPlaces, isLoading };
}
