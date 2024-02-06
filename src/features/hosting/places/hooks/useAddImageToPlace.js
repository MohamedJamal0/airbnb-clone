import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { addImageToPlace as addImageToPlaceApi } from '../services';

export default function useAddImageToPlace() {
  const queryClient = useQueryClient();
  const { placeId } = useParams();

  const { mutate: addImageToPlace, isPending: isAddingImage } = useMutation({
    mutationFn: (image) => addImageToPlaceApi(placeId, image),
    onSuccess: (newImage) => {
      queryClient.setQueryData(['editPlace', placeId], (old) => {
        return {
          ...old,
          place_images: [...old.place_images, newImage],
        };
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { addImageToPlace, isAddingImage };
}
