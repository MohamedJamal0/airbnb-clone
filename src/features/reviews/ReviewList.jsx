import ReviewItem from './ReviewItem';

export default function ReviewList({ reviews }) {
  return (
    <ul className="flex flex-col gap-5">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
