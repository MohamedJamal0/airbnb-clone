import { useEffect } from 'react';
import { useState } from 'react';
import ReviewItem from './ReviewItem';

export default function ReviewsGrid({ reviews, isLoading }) {
  const [firstFetchedReviews, setFirstFetchedReviews] = useState([]);

  useEffect(() => {
    if (reviews && !firstFetchedReviews.length)
      setFirstFetchedReviews(reviews.slice(0, 6));
  }, [reviews]);

  if (isLoading && !firstFetchedReviews.length) return <div>Loading...</div>;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 mb-8">
      {firstFetchedReviews.slice(0, 6).map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
