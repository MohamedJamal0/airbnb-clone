
import HostPlaceCard from './HostPlaceCard';

export default function HostPlacesCardsGrid({ hostPlaces }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5">
      {hostPlaces.map((hostPlace) => (
        <HostPlaceCard key={hostPlace.id} hostPlace={hostPlace} />
      ))}
    </div>
  );
}
