import InputCounter from '../../../components/InputCounter';
import Map from '../../../components/Map';
import Input from '../../../components/ui/Input';
import useCreatePlace from './useCreatePlace';
import { useState } from 'react';

export default function CreatePlaceForm({ onClose }) {
  const { createPlace, isLoading } = useCreatePlace();
  const [placeForm, setPlaceForm] = useState({
    title: '',
    address: '',
    city: '',
    position: { latitude: 0, longitude: 0 },
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
      await createPlace({
        host_id: 1,
        title: placeForm.title,
        city: placeForm.city,
        latitude: placeForm.position.latitude,
        address: placeForm.address,
        longitude: placeForm.position.longitude,
        num_bathrooms: placeForm.numBaths,
        num_rooms: placeForm.numRooms,
        num_beds: placeForm.numBeds,
        max_guests: placeForm.numGuests,
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const disapled =
    !placeForm.title ||
    !placeForm.address ||
    !placeForm.city ||
    !placeForm.position.latitude ||
    !placeForm.position.longitude;

  return (
    <form className="w-[50vw] h-[70vh] px-6 py-4 overflow-y-scroll">
      <Input
        id={'placeTitle'}
        label={'Place Title '}
        type={'text'}
        value={placeForm.title}
        onChange={(e) =>
          handleOnChange({ key: 'title', value: e.target.value })
        }
      />
      <h1 className="text-lg mb-3">Where is your place located?</h1>

      <Input
        id="address"
        label="Address"
        type={'text'}
        value={placeForm.address}
        onChange={(e) =>
          handleOnChange({ key: 'address', value: e.target.value })
        }
      />
      <Input
        id="city"
        label="City"
        type="text"
        value={placeForm.city}
        onChange={(e) => handleOnChange({ key: 'city', value: e.target.value })}
      />
      <div className="h-[400px] border border-black mb-4">
        <Map
          position={placeForm.position}
          onChange={(position) =>
            handleOnChange({ key: 'position', value: position })
          }
        />
      </div>
      <div className="mb-3">
        <h1 className="text-lg mb-3 ">Share some basics about your place</h1>
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
      <div className="flex justify-end">
        <button
          disabled={isLoading || disapled}
          onClick={handleonCreate}
          type="button"
          className="w-16 mr-auto py-1 rounded-md bg-black text-white  "
        >
          Create
        </button>
      </div>
    </form>
  );
}
