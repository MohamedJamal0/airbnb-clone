import { useState } from 'react';
import useEditedPlace from './hooks/useEditedPlace';
import { PiHouse } from 'react-icons/pi';
import { PiDoorOpen } from 'react-icons/pi';
import { PiUsersBold } from 'react-icons/pi';
import useUpdatePlace from './hooks/useUpdatePlace';
import SaveEditPlace from './SaveEditPlace';

export default function EditPlaceType() {
  const { editedPlace } = useEditedPlace();
  const { updatePlace, isLoading } = useUpdatePlace();

  const [typeId, setTypeId] = useState(editedPlace.place_type_id);

  const handleChagneType = (typeId) => () => setTypeId(typeId);

  const handleSaveUpdate = () => {
    updatePlace({ place_type_id: typeId });
  };

  const isDisabled = !typeId;
  return (
    <div>
      <h1 className="mb-8 text-3xl font-medium">
        What type of place will guests have?
      </h1>
      <div role="radiogroup" className="flex flex-col gap-5">
        <button
          onClick={handleChagneType(1)}
          type="button"
          role="radio"
          aria-checked={typeId === 1}
          className="flex items-center justify-between w-full gap-4 p-6 text-left rounded-md border aria-checked:border-black aria-checked:bg-gray-100 "
        >
          <div>
            <h2 className="text-xl font-medium">An entire place</h2>
            <p className=" text-gray-400">
              Guests have the whole place to themselves
            </p>
          </div>
          <PiHouse className="w-12 h-12" />
        </button>
        <button
          onClick={handleChagneType(2)}
          type="button"
          role="radio"
          aria-checked={typeId === 2}
          className="flex items-center justify-between w-full gap-4 p-6 text-left rounded-md border aria-checked:border-black aria-checked:bg-gray-100 "
        >
          <div>
            <h2 className="text-xl font-medium">A room</h2>
            <p className=" text-gray-400">
              Guests have the their own room in a home , plus acces to shared
              spaces.
            </p>
          </div>
          <PiDoorOpen className="w-12 h-12" />
        </button>
        <button
          onClick={handleChagneType(3)}
          type="button"
          role="radio"
          aria-checked={typeId === 3}
          className="flex items-center justify-between w-full gap-4 p-6 text-left rounded-md border aria-checked:border-black aria-checked:bg-gray-100 "
        >
          <div>
            <h2 className="text-xl font-medium">A shared room</h2>
            <p className=" text-gray-400">
              Guests sleep in a room or common area that may be shared with your
              or others.
            </p>
          </div>
          <PiUsersBold className="w-12 h-12" />
        </button>
      </div>
      <SaveEditPlace
        onSave={handleSaveUpdate}
        loading={isLoading}
        isDisapled={isDisabled}
      />
    </div>
  );
}
