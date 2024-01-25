import { useState } from 'react';
import useEditedPlace from './useEditedPlace';
import SaveEditPlace from './SaveEditPlace';
import useUpdatePlace from './useUpdatePlace';

export default function EditPlaceStatus() {
  const { editedPlace } = useEditedPlace();

  const [status, setStatus] = useState(editedPlace.is_listed);

  const { updatePlace, isLoading } = useUpdatePlace();

  const handleUpdateStatus = (value) => () => setStatus(value);

  const { amenities, summary, place_type_id, category_id, place_image } =
    editedPlace;

  const isCompleted =
    amenities?.length > 0 &&
    summary &&
    place_type_id &&
    category_id &&
    place_image.length > 0;

  const handleSaveUpdate = () => {
    if (status === true && !isCompleted) return;
    updatePlace({ is_listed: status });
  };

  return (
    <div className="max-w-lg mx-auto">
      <img
        src="https://res.cloudinary.com/dfmcyikt4/image/upload/f_auto,q_auto/wjo81th2rvlwmzbbsckt"
        alt=""
        className="w-full aspect-video"
      />
      <div className="flex flex-col gap-4 " role="radiogroup">
        <button
          role="radio"
          aria-checked={status === true}
          onClick={handleUpdateStatus(true)}
          disabled={!isCompleted}
          className="p-4 rounded-md border text-left aria-checked:border-black aria-checked:bg-gray-50"
        >
          <span className="font-medium">Listed</span>
          <p className="text-gray-500">
            Your listing appears in search results and can be booked by guests.
          </p>
        </button>
        <button
          role="radio"
          aria-checked={status === false}
          onClick={handleUpdateStatus(false)}
          className="p-4 rounded-md border text-left aria-checked:border-black aria-checked:bg-gray-50"
        >
          <span className="font-medium">Unlisted</span>
          <p className="text-gray-500">
            Your listing won't appear in search restuls and can't be booked. You
            can set dates to pause.
          </p>
        </button>
      </div>
      <SaveEditPlace onSave={handleSaveUpdate} loading={isLoading} />
    </div>
  );
}
