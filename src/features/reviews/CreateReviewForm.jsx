import { useState } from 'react';
import StarRating from '../../components/StarRating';
import useCreateReview from './hooks/useCreateReview';

export default function CreateReviewForm({ onClose, bookingId, placeId }) {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const { createReview, isCreating } = useCreateReview();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content && !rating) return;
    await createReview({ rating, content, bookingId, placeId });
    onClose();
  };

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
          disabled={isCreating || !content || !rating}
          className=" px-2 py-1 rounded-md font-medium text-white bg-pink-500"
        >
          {isCreating ? 'Creating...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
