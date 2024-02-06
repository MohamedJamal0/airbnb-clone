import { useEffect, useState } from 'react';
import StarRating from '../../components/StarRating';
import useReview from './hooks/useReview';
import Loading from '../../components/ui/Loading';
import useUpdateReview from './hooks/useUpdateReview';

export default function EditReviewForm({ onClose, bookingId }) {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const { updateReview, isUpdating } = useUpdateReview({ bookingId });

  const { review, isLoading } = useReview({ bookingId });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content && !rating) return;

    await updateReview({ rating, content, reviewId: review.id });
    onClose();
  };

  useEffect(() => {
    if (review) {
      setRating(review.rating);
      setContent(review.content);
    }
  }, [review]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <StarRating rating={rating} onChange={(rating) => setRating(rating)} />
      </div>
      <textarea
        name="content"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-5 border mt-4 rounded-md border-black w-full "
      />

      <div className="flex justify-end mt-2">
        <button
          disabled={isUpdating || !content || !rating}
          className=" px-2 py-1 rounded-md font-medium text-white bg-pink-500"
        >
          {isUpdating ? 'updating...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
