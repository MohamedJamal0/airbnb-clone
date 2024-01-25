import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { addAmenityToPlace as addAmenityToPlaceApi } from '../../../../services/apiPlaces';
export default function useAddAmenityToPlace() {
  const { placeId } = useParams();

  const queryClient = useQueryClient();

  const { mutate: addAmenityToPlace } = useMutation({
    mutationFn: (amenityId) => addAmenityToPlaceApi(placeId, amenityId),
    onMutate: async (amenityId) => {
      await queryClient.cancelQueries(['editPlace', placeId]);

      const previosPlace = queryClient.getQueryData(['editPlace']);

      queryClient.setQueryData(['editPlace', placeId], (old) => {
        return {
          ...old,
          amenities: [...old.amenities, { id: amenityId }],
        };
      });

      return { previosPlace };
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(['editPlace', placeId], context.previosPlace);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['editPlace', placeId] });
    },
  });

  return { addAmenityToPlace };
}
