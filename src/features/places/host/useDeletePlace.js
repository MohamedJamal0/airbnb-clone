import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePlace as deletePlaceApi } from '../../../services/apiPlaces';

export default function useDeletePlace() {
  const queryClient = useQueryClient();

  const { mutateAsync: deletePlace, isPending: isLoading } = useMutation({
    mutationFn: (placeId) => deletePlaceApi(placeId),
    onSuccess: (_, placeId) => {
      queryClient.setQueryData(['hostPlaces'], (old) => {
        return old.filter((place) => place.id !== placeId);
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { deletePlace, isLoading };
}
