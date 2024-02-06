import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateReview as updateReviewApi } from '../services';

export default function useUpdateReview({ bookingId }) {
  const queyClient = useQueryClient();
  const { mutateAsync: updateReview, isPending : isUpdating } = useMutation({
    mutationFn: updateReviewApi,
    onSuccess: (_, data) => {
      queyClient.setQueryData(['trips'], (old) =>
        old.map((trip) =>
          trip.booking_id === bookingId
            ? { ...trip, review_rating: data.rating }
            : trip
        )
      );
    },
  });

  return { updateReview, isUpdating };
}
