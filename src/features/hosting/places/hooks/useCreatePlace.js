import { createPlace as createPlaceApi } from '../services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useUser from '../../../auth/hooks/useUser';
export default function useCreatePlace() {
  const queryClient = useQueryClient();
  const {
    user: { hostId },
  } = useUser();

  const { mutateAsync: createPlace, isPending: isLoading } = useMutation({
    mutationFn: (place) => createPlaceApi({ place, hostId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hostPlaces', hostId] });
    },
  });

  return { createPlace, isLoading };
}
