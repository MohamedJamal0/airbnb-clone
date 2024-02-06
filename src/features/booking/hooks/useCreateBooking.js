import { createBooking as createBookingApi } from '../services/index';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
export default function useCreateBooking() {
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: createBooking, isPending: isBooking } = useMutation({
    mutationFn: (booking) => createBookingApi(booking),
    onSuccess: () => {
      console.log('created');
      navigate('/trips');
    },
  });

  return { createBooking, isBooking };
}
