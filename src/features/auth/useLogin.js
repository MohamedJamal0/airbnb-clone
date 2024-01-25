import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';

export default function useLogin() {
  const queryClient = useQueryClient();

  const { mutateAsync: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { login, isLoading };
}
