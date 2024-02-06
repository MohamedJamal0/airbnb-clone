import SaveEditPlace from './SaveEditPlace';
import { useRef } from 'react';
import useUpdatePlace from './hooks/useUpdatePlace';
import useEditedPlace from './hooks/useEditedPlace';
export default function EditPlaceSummary() {
  const inputRef = useRef();

  const { updatePlace, isLoading } = useUpdatePlace();
  const {
    editedPlace: { summary },
  } = useEditedPlace();

  return (
    <div className="">
      <h1 className="mb-8 font-medium text-3xl">Tell us about your place</h1>
      <textarea
        ref={inputRef}
        defaultValue={summary}
        className="w-full  h-[200px] p-5 border rounded-md text-2xl focus:outline-none"
      />
      <SaveEditPlace
        onSave={() => updatePlace({ summary: inputRef.current.value })}
        loading={isLoading}
      />
    </div>
  );
}
