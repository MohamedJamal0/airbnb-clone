import PlaceMenuActions from './PlaceMenuActions';

export default function HostPlaceCard({ hostPlace }) {
  const coverImage = hostPlace?.place_images[0];
  return (
    <div className="relative">
      <PlaceMenuActions placeId={hostPlace.id} />
      {coverImage ? (
        <img className='w-full aspect-[3/2.5] rounded-md'  src={coverImage.image_url} loading='lazy' />
      ) : (
        <div className="w-full rounded-md aspect-[3/2.5] bg-slate-200"></div>
      )}
      <div className="font-medium mt-2">{hostPlace.title}</div>
      <div className="text-gray-700">{hostPlace.city}</div>
    </div>
  );
}
