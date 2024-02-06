import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview as createReviewApi } from '../services';

export default function useCreateReview() {
  const queryClient = useQueryClient();
  const { mutateAsync: createReview, isPending: isCreating } = useMutation({
    mutationFn: createReviewApi,
    onSuccess: (_, data) => {
      queryClient.setQueryData(['trips'], (old) =>
        old.map((trip) =>
          trip.bookind_id === data.bookind_id
            ? { ...trip, review_rating: data.rating }
            : trip
        )
      );
    },
  });

  return { createReview, isCreating };
}
