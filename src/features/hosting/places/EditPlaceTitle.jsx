import { useState } from 'react';
import SaveEditPlace from './SaveEditPlace';
import useUpdatePlace from './hooks/useUpdatePlace';
import useEditedPlace from './hooks/useEditedPlace';

export default function EditPlaceTitle() {
  const { updatePlace, isLoading } = useUpdatePlace();
  const { editedPlace } = useEditedPlace();

  const [title, setTitle] = useState(editedPlace.title);

  const handleSaveTitle = () => {
    if (!title) return;
    updatePlace({ title });
  };
  return (
    <div>
      <h1 className="mb-8 font-medium text-3xl">Give your place a title</h1>
      <textarea
        className="w-full  h-[200px] p-5 border rounded-md text-2xl focus:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <SaveEditPlace
        onSave={handleSaveTitle}
        loading={isLoading}
        isDisapled={!title}
      />
    </div>
  );
}
