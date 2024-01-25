import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { removeAmenityFromPlace as removeAmenityFromPlaceApi } from '../../../../services/apiPlaces';

export default function useRemoveAmenityFromPlace() {
  const { placeId } = useParams();

  const queryClient = useQueryClient();

  const { mutate: removeAmenityFromPlace } = useMutation({
    mutationFn: (amenityId) => removeAmenityFromPlaceApi(placeId, amenityId),
    onMutate: async (amenityId) => {
      await queryClient.cancelQueries(['editPlace', placeId]);
      const previosPlace = queryClient.getQueryData(['editPlace']);

      queryClient.setQueryData(['editPlace', placeId], (old) => ({
        ...old,
        amenities: old.amenities.filter((amenity) => amenity.id !== amenityId),
      }));

      return { previosPlace };
    },
    onError: (error, _, context) => {
      console.log(error);
      queryClient.setQueryData(['editPlace', placeId], context.previosPlace);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['editPlace', placeId] });
    },
  });

  return { removeAmenityFromPlace };
}
