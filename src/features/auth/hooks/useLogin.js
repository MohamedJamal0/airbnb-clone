import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../services';

export default function useLogin() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: login,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
    },
  });

  return { login, isLoading, error };
}
