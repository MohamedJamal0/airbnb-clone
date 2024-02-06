import { useState } from 'react';
import Input from '../../../components/ui/Input';
import Map from '../../../components/Map';
import SaveEditPlace from './SaveEditPlace';
import useUpdatePlace from './hooks/useUpdatePlace';
import useEditedPlace from './hooks/useEditedPlace';
import useCity from '../../../hooks/useCity';
import Loading from '../../../components/ui/Loading';

export default function EditPlaceLocation() {
  const { editedPlace } = useEditedPlace();

  const { updatePlace, isLoading } = useUpdatePlace();

  const [location, setLocation] = useState({
    latitude: editedPlace?.latitude || 0,
    longitude: editedPlace?.longitude || 0,
    address: editedPlace?.address || '',
  });

  const { data, isLoadingCity } = useCity({
    lat: location.latitude,
    long: location.longitude,
  });

  const handleUpdatePostion = ({ latitude, longitude }) => {
    setLocation((prev) => ({ ...prev, latitude, longitude }));
  };

  const handleUpdateAddress = (e) => {
    setLocation((prev) => ({ ...prev, address: e.target.value }));
  };

  const handleSave = () => {
    const { latitude, longitude } = location;
    const { city, countryName: country } = data;

    if (!latitude || !longitude || !city || !country) return;

    updatePlace({
      latitude,
      longitude,
      city,
      country,
    });
  };

  const isDisabled = !location.latitude || !location.longitude;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-medium lg:shrink-0 ">
          Tell us where your place is located
        </h1>
        <SaveEditPlace
          onSave={handleSave}
          loading={isLoading}
          isDisapled={isDisabled}
        />
      </div>

      <div className="w-full h-[300px] mb-2">
        <Map
          latitude={location.latitude}
          longitude={location.longitude}
          onChange={handleUpdatePostion}
        />
      </div>
      <Input
        id={'address'}
        type={'text'}
        label={'Address'}
        name={'address'}
        value={location.address}
        onChange={handleUpdateAddress}
        autoFocus
      />
      {isLoadingCity ? (
        <div className="flex items-center justify-center h-[155px]">
          <Loading />
        </div>
      ) : (
        <>
          <Input
            id={'city'}
            type={'text'}
            label={'City'}
            name={'city'}
            value={data?.city}
            disabled
          />
          <Input
            id={'country'}
            type={'text'}
            label={'Country'}
            name={'country'}
            value={data?.countryName}
            disabled
          />
        </>
      )}
    </div>
  );
}
