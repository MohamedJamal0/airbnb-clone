import PlaceCardGrid from '../features/places/PlaceCardGrid';
import Header from '../layout/Header';
import usePlaces from '../features/places/usePlaces';
import PlaceCategory from '../features/places/PlaceCategories';
import PlacesFilterModal from '../features/filter/PlacesFilterModal';

export default function HomePage() {
  const { places, isLoading, fetchNextPage, isFetching } = usePlaces();

  return (
    <div>
      <Header />
      <div className=" sticky z-20 top-[80px] flex gap-[5%] max-w-7xl mx-auto py-6  bg-white ">
        <PlaceCategory />
        <PlacesFilterModal />
      </div>
      <div className="max-w-7xl mx-auto py-3">
        <PlaceCardGrid places={places} isLoading={isLoading || isFetching} />
      </div>
    </div>
  );
}
