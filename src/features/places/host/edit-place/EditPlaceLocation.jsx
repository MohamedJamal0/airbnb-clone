import { useState } from 'react';
import Input from '../../../../components/ui/Input';
import Map from '../../../../components/Map';
import SaveEditPlace from './SaveEditPlace';
import useUpdatePlace from './useUpdatePlace';
import useEditedPlace from './useEditedPlace';

export default function EditPlaceLocation() {
  const { editedPlace } = useEditedPlace();
  const { latitude, longitude, address, city } = editedPlace;

  const [location, setLocation] = useState({
    position: { latitude, longitude },
    address,
    city,
  });

  const { updatePlace, isLoading } = useUpdatePlace();

  const handleUpdateLocation = ({ key, value }) => {
    setLocation((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    const {
      position: { latitude, longitude },
      city,
      address,
    } = location;

    if (!latitude || !longitude || !address || !city) return;

    updatePlace({
      latitude,
      longitude,
      address,
      city,
    });
  };

  return (
    <div className="">
      <h1 className="mb-8 text-3xl font-medium ">
        {' '}
        Tell us where your place is located
      </h1>
      <div className="w-full h-[300px] mb-2">
        <Map
          position={location.position}
          onChange={(position) =>
            handleUpdateLocation({ key: 'position', value: position })
          }
        />
      </div>
      <Input
        id={'city'}
        type={'text'}
        label={'City'}
        name={'city'}
        value={location.city}
        onChange={(e) =>
          handleUpdateLocation({ key: 'city', value: e.target.value })
        }
      />
      <Input
        id={'address'}
        type={'text'}
        label={'Address'}
        name={'address'}
        value={location.address}
        onChange={(e) =>
          handleUpdateLocation({ key: 'address', value: e.target.value })
        }
      />
      <SaveEditPlace onSave={handleSave} loading={isLoading} />
    </div>
  );
}
