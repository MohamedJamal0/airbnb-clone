import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
export default function useCurrentPlace() {
  const queryClient = useQueryClient();
  const { placeId } = useParams();

  const currentPlace = queryClient.getQueryData(['hostPlace', placeId]);

  return { currentPlace };
}
