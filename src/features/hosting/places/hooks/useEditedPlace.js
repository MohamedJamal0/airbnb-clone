import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getEditedPlace } from '../services';

export default function useEditedPlace() {
  const { placeId } = useParams();

  const { data: editedPlace, isLoading } = useQuery({
    queryKey: ['editPlace', placeId],
    queryFn: () => getEditedPlace(placeId),
  });

  return { editedPlace, isLoading };
}
