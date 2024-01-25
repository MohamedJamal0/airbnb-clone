import HostPlacesCardsGrid from '../features/places/host/HostPlacesCardsGrid';
import useHostPlaces from '../features/places/host/useHostPlaces';
import CreatePlace from '../features/places/host/CreatePlace';

export default function HostPlacesPage() {
  const { hostPlaces, isLoading } = useHostPlaces(1);

  if (isLoading) return <div className="">Loading</div>;
  return (
    <div className="max-w-[1280px] mx-auto px-[3%] py-16">
      <div className="flex justify-between items-center mb-14">
        <h1 className="text-3xl font-medium">Your Places</h1>
        <CreatePlace />
      </div>
      <HostPlacesCardsGrid hostPlaces={hostPlaces} />
    </div>
  );
}
