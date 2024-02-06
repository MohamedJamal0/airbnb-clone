import HostPlacesCardsGrid from '../features/hosting/places/HostPlacesCardsGrid';
import useHostPlaces from '../features/hosting/places/hooks/useHostPlaces';
import CreatePlace from '../features/hosting/places/CreatePlace';
import HostingPageLoading from '../components/HostingPageLoading';

export default function HostPlacesPage() {
  const { hostPlaces, isLoading } = useHostPlaces(1);

  if (isLoading) return <HostingPageLoading />;
  return (
    <div className="max-w-[1280px] mx-auto px-[3%] py-16">
      <div className="flex justify-between items-center mb-14">
        <h1 className="text-3xl font-medium">Your Places</h1>
        <CreatePlace />
      </div>
      {hostPlaces.length === 0 && (
        <div className="flex items-center justify-center h-56 p-6 rounded-md bg-gray-100 ">
          <h1 className="font-medium text-gray-500">
            You don't have any place yet
          </h1>
        </div>
      )}
      <HostPlacesCardsGrid hostPlaces={hostPlaces} />
    </div>
  );
}
