import { useMutation, useQueryClient } from '@tanstack/react-query';
import { checkin as checkinApi } from '../services';
export function useCheckin() {
  const queryClient = useQueryClient();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) => checkinApi(bookingId),

    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => console.log('some thing went wront'),
  });

  return { checkin, isCheckingIn };
}
