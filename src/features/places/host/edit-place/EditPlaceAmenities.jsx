import useAddAmenityToPlace from './useAddAmenityToPlace';
import useRemoveAmenityFromPlace from './useRemoveAmenityFromPlace';
import { amenities } from '../../../../data';
import useEditedPlace from './useEditedPlace';

export default function PlaceAmenitiesSelection() {
  const { addAmenityToPlace } = useAddAmenityToPlace();
  const { removeAmenityFromPlace } = useRemoveAmenityFromPlace();

  const { editedPlace } = useEditedPlace();

  const selectedAmenities = editedPlace?.amenities.map((amenity) => amenity.id);

  const handleCheck = (e, amenityId) => {
    const isSelected = e.target.closest('button').ariaChecked === 'true';

    if (isSelected) removeAmenityFromPlace(amenityId);
    else addAmenityToPlace(amenityId);
  };

  return (
    <div>
      <h1 className="mb-8 text-3xl">
        Tell guests what your place has to offer
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {amenities.map(({ id, amenityName, Icon }) => (
          <button
            key={id}
            role="checkbox"
            type="button"
            aria-checked={selectedAmenities.includes(id)}
            onClick={(e) => handleCheck(e, id)}
            className="w-full h-22 p-5 border rounded-md text-left aria-checked:border-black aria-checked:bg-gray-100"
          >
            {<Icon className="w-6 h-6" />}
            <span className="mt-1 inline-block">{amenityName}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
