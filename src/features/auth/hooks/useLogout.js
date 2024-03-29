import { useQueryClient, useMutation } from '@tanstack/react-query';
import { logout as logoutApi } from '../services';
import { useNavigate } from 'react-router-dom';
export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { logout };
}
