import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createHost as createHostApi } from '../services';
import useUser from './useUser';

export default function useCreateHost() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { mutateAsync: createHost, isPending: isLoading } = useMutation({
    mutationFn: createHostApi,

    onSuccess: async (hostId) => {
      queryClient.setQueryData(['user'], {
        ...user,
        isHost: true,
        hostId,
      });
    },
  });

  return { createHost, isLoading };
}
