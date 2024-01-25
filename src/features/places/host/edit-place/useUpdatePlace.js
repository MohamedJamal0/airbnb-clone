import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePlace as updatePlaceApi } from '../../../../services/apiPlaces';
import { useParams } from 'react-router-dom';

export default function useUpdatePlace() {
  const queryClient = useQueryClient();
  const { placeId } = useParams();

  const { mutate: updatePlace, isPending: isLoading } = useMutation({
    mutationFn: (updatedData) => updatePlaceApi(updatedData, placeId),
    onSuccess: (_, updatedData) => {
      queryClient.setQueryData(['editPlace', placeId], (old) => {
        return { ...old, ...updatedData };
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { updatePlace, isLoading };
}
