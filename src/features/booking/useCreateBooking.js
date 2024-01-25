import { createBooking as createBookingApi } from '../../services/apiBookings';
import { useMutation } from '@tanstack/react-query';

export default function useCreateBooking() {
  //   const queryClient = useQueryClient();
  const { mutateAsync: createBooking, isPending: isLoading } = useMutation({
    mutationFn: createBookingApi,
    onSuccess: (newPlace) => {
      console.log(newPlace);
    },
  });

  return { createBooking, isLoading };
}
