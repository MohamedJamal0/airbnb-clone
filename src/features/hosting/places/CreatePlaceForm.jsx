import InputCounter from '../../../components/InputCounter';
import Input from '../../../components/ui/Input';
import useCreatePlace from './hooks/useCreatePlace';
import { useState } from 'react';

export default function CreatePlaceForm({ onClose }) {
  const { createPlace, isLoading } = useCreatePlace();
  const [placeForm, setPlaceForm] = useState({
    title: '',
    numGuests: 1,
    numBaths: 1,
    numRooms: 1,
    numBeds: 1,
  });

  const handleOnChange = ({ key, value }) => {
    setPlaceForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleonCreate = async () => {
    try {
      await createPlace(placeForm);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const disapled = !placeForm.title;

  return (
    <form className="w-[50vw]  px-6 py-4 max-h-[70vh] overflow-y-auto">
      <h1 className="text-lg mb-3 font-medium">Tell us about your place</h1>
      <Input
        id={'placeTitle'}
        label={'Place Title '}
        type={'text'}
        value={placeForm.title}
        onChange={(e) =>
          handleOnChange({ key: 'title', value: e.target.value })
        }
      />
      <div className="mb-3">
        <h1 className="text-lg mb-3 font-medium ">
          Share some basics about your place
        </h1>
        <InputCounter
          title="Rooms"
          value={placeForm.numRooms}
          onChange={(value) => handleOnChange({ key: 'numRooms', value })}
          minValue={1}
        />
        <InputCounter
          title="Beds"
          value={placeForm.numBeds}
          onChange={(value) => handleOnChange({ key: 'numBeds', value })}
          minValue={1}
        />
        <InputCounter
          title="Bathrooms"
          value={placeForm.numBaths}
          onChange={(value) => handleOnChange({ key: 'numBaths', value })}
          minValue={1}
        />
        <InputCounter
          title="Max Guests"
          value={placeForm.numGuests}
          onChange={(value) => handleOnChange({ key: 'numGuests', value })}
          minValue={1}
        />
      </div>
      <div className="flex justify-end py-6">
        <button
          disabled={isLoading || disapled}
          onClick={handleonCreate}
          type="button"
          className=" px-2  py-1 rounded-md bg-black text-white  "
        >
          Create
        </button>
      </div>
    </form>
  );
}
