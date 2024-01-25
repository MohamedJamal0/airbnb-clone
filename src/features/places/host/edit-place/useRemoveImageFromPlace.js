import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { removeImageFromPlace as removeImageFromPlaceApi } from '../../../../services/apiPlaces';

export default function useRemoveImageFromPlace() {
  const queryClient = useQueryClient();
  const { placeId } = useParams();

  const { mutate: removeImageFromPlace } = useMutation({
    mutationFn: (imageId) => removeImageFromPlaceApi(imageId),
    onSuccess: (_, imageId) => {
      queryClient.setQueryData(['editPlace', placeId], (old) => {
        return {
          ...old,
          place_image: old.place_image.filter((image) => image.id !== imageId),
        };
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { removeImageFromPlace };
}
