import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPlaceInfo } from '../../services/apiPlaces';
export default function usePlace() {
  const { placeId } = useParams();

  const { data: place, isLoading } = useQuery({
    queryKey: ['place', placeId],
    queryFn: () => getPlaceInfo(placeId),
  });

  return { place, isLoading };
}
