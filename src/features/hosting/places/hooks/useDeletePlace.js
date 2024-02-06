import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePlace as deletePlaceApi } from '../services';
import useUser from '../../../auth/hooks/useUser';

export default function useDeletePlace() {
  const queryClient = useQueryClient();
  const {
    user: { hostId },
  } = useUser();

  const { mutateAsync: deletePlace, isPending: isLoading } = useMutation({
    mutationFn: (placeId) => deletePlaceApi(placeId),
    onSuccess: (_, placeId) => {
      queryClient.setQueryData(['hostPlaces', hostId], (old) => {
        return old.filter((place) => place.id !== placeId);
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { deletePlace, isLoading };
}
