import InputCounter from '../../../../components/InputCounter';
import { useState } from 'react';
import SaveEditPlace from './SaveEditPlace';
import useUpdatePlace from './useUpdatePlace';
import useEditedPlace from './useEditedPlace';

export default function EditPlacePlan() {
  const { editedPlace } = useEditedPlace();
  const { num_beds, num_rooms, num_bathrooms, max_guests } = editedPlace;

  const [plan, setPlan] = useState({
    numBeds: num_beds,
    numRooms: num_rooms,
    numBaths: num_bathrooms,
    numGuests: max_guests,
  });

  const { updatePlace, isLoading } = useUpdatePlace();

  const handleUpdatePlan = ({ key, value }) => {
    setPlan((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    updatePlace({
      num_bathrooms: plan.numBaths,
      num_rooms: plan.numRooms,
      num_beds: plan.numBeds,
      max_guests: plan.numGuests,
    });
  };
  return (
    <div>
      <h1 className="font-medium text-3xl mb-10 ">
        Share some basics about your place
      </h1>
      <div className="flex flex-col gap-5">
        <InputCounter
          title={'Bathrooms'}
          value={plan.numBaths}
          onChange={(value) => handleUpdatePlan({ key: 'numBaths', value })}
          minValue={1}
        />
        <InputCounter
          title={'Rooms'}
          value={plan.numRooms}
          onChange={(value) => handleUpdatePlan({ key: 'numRooms', value })}
          minValue={1}
        />
        <InputCounter
          title={'Beds'}
          value={plan.numBeds}
          onChange={(value) => handleUpdatePlan({ key: 'numBeds', value })}
          minValue={1}
        />
        <InputCounter
          title={'Guests'}
          value={plan.numGuests}
          onChange={(value) => handleUpdatePlan({ key: 'numGuests', value })}
          minValue={1}
        />
      </div>
      <SaveEditPlace onSave={handleSave} loading={isLoading} />
    </div>
  );
}
