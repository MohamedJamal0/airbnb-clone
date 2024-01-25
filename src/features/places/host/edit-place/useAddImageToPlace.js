import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { addImageToPlace as addImageToPlaceApi } from '../../../../services/apiPlaces';

export default function useAddImageToPlace() {
  const queryClient = useQueryClient();
  const { placeId } = useParams();

  const { mutate: addImageToPlace, isPending: isLoading } = useMutation({
    mutationFn: (image) => addImageToPlaceApi(placeId, image),
    onSuccess: (newImage) => {
      queryClient.setQueryData(['editPlace', placeId], (old) => {
        return {
          ...old,
          place_image: [...old.place_image, newImage],
        };
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { addImageToPlace, isLoading };
}
