import { createPlace as createPlaceApi } from '../../../services/apiPlaces';
import { useMutation, useQueryClient } from '@tanstack/react-query';
export default function useCreatePlace() {
  const queryClient = useQueryClient();
  const { mutateAsync: createPlace, isPending: isLoading } = useMutation({
    mutationFn: createPlaceApi,
    onSuccess: (newPlace) => {
      queryClient.setQueryData(['hostPlaces'], (old) => [...old, newPlace]);
    },
  });

  return { createPlace, isLoading };
}



