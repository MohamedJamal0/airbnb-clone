import { useNavigate } from 'react-router-dom';
import PlaceStatus from './PlaceStatus';
import DeletePlace from './DeletePlace';
export default function HostPlaceCard({ hostPlace }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/hosting/places/editor/${hostPlace.id}`);
  };
  return (
    <div className="relative cursor-pointer">
      {hostPlace.cover_image ? (
        <img
          className="w-full aspect-[3/2.5] rounded-md"
          src={hostPlace.cover_image}
          loading="lazy"
        />
      ) : (
        <div className="w-full rounded-md aspect-[3/2.5] bg-slate-200"></div>
      )}
      <div className="font-medium mt-2">{hostPlace.title}</div>
      <div className="text-gray-700">{hostPlace.city}</div>
      <DeletePlace placeId={hostPlace.id} />
      <div
        onClick={handleOnClick}
        className="absolute top-0 right-0 w-full h-full z-10"
      ></div>
      <div className="absolute top-3 left-2 flex items-center gap-2 px-4 py-1 font-medium text-sm  rounded-full bg-white">
        <PlaceStatus
          status={
            hostPlace.status === 'in progress'
              ? 'in progress'
              : hostPlace.is_listed
              ? 'listed'
              : 'unlisted'
          }
        />
        <span>
          {hostPlace.status === 'in progress'
            ? 'in Progress'
            : hostPlace.is_listed
            ? 'Listed'
            : 'Unlisted'}
        </span>
      </div>
    </div>
  );
}
