import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { removeImageFromPlace as removeImageFromPlaceApi } from '../services';

export default function useRemoveImageFromPlace() {
  const queryClient = useQueryClient();
  const { placeId } = useParams();

  const { mutate: removeImageFromPlace, isPending: isRemovingImage } =
    useMutation({
      mutationFn: (imageId) => removeImageFromPlaceApi(imageId),
      onSuccess: (_, imageId) => {
        queryClient.setQueryData(['editPlace', placeId], (old) => {
          return {
            ...old,
            place_images: old.place_images.filter(
              (image) => image.id !== imageId
            ),
          };
        });
      },
      onError: (error) => {
        console.log(error);
      },
    });

  return { removeImageFromPlace, isRemovingImage };
}
