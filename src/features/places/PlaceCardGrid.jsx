import PlaceCardItem from './PlaceCardItem';
import PlaceCardSkeleton from './PlaceCardSkeleton';

export default function PlaceCardGrid({ places, isLoading }) {
  if (places?.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-medium mb-3">No exact matches</h1>
        <p>
          Try changing or removing some of your filters or adjusting your search
          area.
        </p>
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1%]">
      {places?.map((place) => (
        <PlaceCardItem key={place.id} place={place} />
      ))}
      {isLoading &&
        Array.from({ length: 20 }).map((_, index) => (
          <PlaceCardSkeleton key={index} />
        ))}
    </ul>
  );
}
