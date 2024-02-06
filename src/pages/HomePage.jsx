import PlaceCardGrid from '../features/places/PlaceCardGrid';
import Header from '../layout/Header';
import usePlaces from '../features/places/hooks/usePlaces';
import PlaceCategory from '../features/filter/PlaceCategories';
import PlacesFilterModal from '../features/filter/PlacesFilterModal';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SelectCountryCity from '../components/SelectCountryCity';

export default function HomePage() {
  const { places, isLoading, fetchNextPage, isFetching } = usePlaces();
  const { ref } = useIntersectionObserver(fetchNextPage);

  return (
    <div>
      <Header />
      <SelectCountryCity />
      <div className=" sticky z-20 top-[80px]  py-6 border-b bg-white ">
        <div className="flex items-center gap-5  px-[5%] mx-auto">
          <PlaceCategory />
          <PlacesFilterModal />
        </div>
      </div>
      <div className="mx-auto pt-28 pb-5 px-[5%]">
        <PlaceCardGrid places={places} isLoading={isLoading || isFetching} />
        <div ref={ref}></div>
      </div>
    </div>
  );
}
