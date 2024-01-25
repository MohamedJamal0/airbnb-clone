import InputCounter from '../../components/InputCounter';
import Input from '../../components/ui/Input';
import PlaceAmenitiesCheckBox from './PlaceAmenitiesCheckBox';
import PlaceTypeRadioInput from './PlaceTypeRadioInput';
import usePlacesFilter from './usePlacesFilter';
import { useSearchParams } from 'react-router-dom';

export default function PlacesFilterForm() {
  const { filter, handleUpateFilter, handleFilter, handleResetFilter } =
    usePlacesFilter();

  return (
    <>
      <div className=" relative pt-4 pb-10 w-[90vw] h-[70dvh] px-6 overflow-y-scroll sm:w-[80vw] md:w-[70vw] lg:w-[45vw]">
        <PlaceTypeRadioInput
          onClick={(value) => handleUpateFilter({ key: 'type', value })}
          value={filter.type}
        />
        <div className="border-b py-8">
          <h2 className="text-xl font-medium mb-2">Price Range</h2>
          <p className="mb-6 ">Nightly prices before fees and taxes</p>
          <div className="flex gap-2">
            <Input
              type="text"
              name="minPrice"
              label={'Min'}
              value={filter.minPrice}
              className="flex-1"
              onChange={(e) =>
                handleUpateFilter({ key: 'minPrice', value: e.target.value })
              }
            />
            <Input
              type="text"
              name="maxPrice"
              label={'Max'}
              value={filter.maxPrice}
              className="flex-1"
              onChange={(e) =>
                handleUpateFilter({ key: 'maxPrice', value: e.target.value })
              }
            />
          </div>
        </div>
        <div className="border-b py-8">
          <h2 className="text-xl font-medium mb-2">Rooms and beds</h2>
        </div>
        <PlaceAmenitiesCheckBox
          value={filter.amenities}
          onCheck={(id) => handleUpateFilter({ key: 'amenities', value: id })}
        />
      </div>
      <div className="bottom-0 left-0 z-10 flex justify-between w-full px-5  bg-white ">
        <button className="font-medium" onClick={handleResetFilter}>
          Clear all
        </button>
        <button
          onClick={handleFilter}
          className="px-4 py-2 rounded-md bg-black text-white "
        >
          Search
        </button>
      </div>
    </>
  );
}
