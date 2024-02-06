import ReviewsModal from './ReviewsModal';
import { FaStar } from 'react-icons/fa';
import useReviews from './hooks/useReviews';
import ReviewsGrid from './ReviewsGrid';

export default function Reviews({ averageRating, numReviews }) {
  const {
    reviews,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
    setSortBy,
    sortBy,
  } = useReviews();

  if (!numReviews)
    return <h2 className="text-xl font-medium"> No reviews (yet)</h2>;

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <FaStar className="mt-1" />
        <span className="text-xl font-medium">{`${averageRating.toFixed(
          2
        )} · ${numReviews} reviews`}</span>
      </div>
      <ReviewsGrid reviews={reviews} isLoading={isLoading} />
      <ReviewsModal
        reviews={reviews}
        totalReviews={numReviews}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isFetching={isFetching}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
      />
    </div>
  );
}
