import { useQueryClient, useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';

export default function useSignup() {
  const queryClient = useQueryClient();

  const { mutateAsync: signup, isPending: isLoading } = useMutation({
    mutationFn: (user) => signupApi(user),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { signup, isLoading };
}
