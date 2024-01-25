import { useMutation, useQueryClient } from '@tanstack/react-query';
import { checkout as checkoutApi } from '../../services/apiStays';
export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) => checkoutApi(bookingId),

    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => console.log('some thing went wront'),
  });

  return { checkout, isCheckingOut };
}
