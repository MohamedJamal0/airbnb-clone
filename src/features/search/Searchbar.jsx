import useSearch from './hooks/useSearch';
import DateSelector from './DateSelector';

import GuestsSelector from './GuestsSelector';
import { IoClose, IoSearch } from 'react-icons/io5';
import CitySelector from './CitySelector';

export default function Searchbar({ onClose }) {
  const { updateSearchParams, handleSearchSubmit, searchParams } = useSearch();

  const handleSubmit = () => {
    handleSearchSubmit();
    onClose();
  };
  return (
    <div>
      <ul className="hidden md:flex gap-6  justify-between">
        <li>Stays</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="md:searchbar  absolute left-0 top-0 h-screen md:h-auto md:bg-transparent  overflow-y-scroll md:overflow-visible px-4 py-3 bg-gray-100 w-full z-50 md:top-14 md:left-1/2 md:-translate-x-1/2 ">
        <div
          className={`flex flex-col gap-4  md:gap-0 h-full md:relative md:flex-row md:rounded-full md:w-[70vw]  lg:w-[50vw]   md:mt-4 mx-auto  md:border md:shadow  text-sm `}
        >
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 shrink-0  rounded-full bg-white md:hidden "
          >
            <IoClose className="w-5 h-5" />
          </button>
          <CitySelector
            onChange={updateSearchParams}
            initCity={searchParams.city}
          />
          <DateSelector onChange={updateSearchParams} values={searchParams} />
          <GuestsSelector onChange={updateSearchParams} values={searchParams} />
          <button className="fixed left-3 bottom-8 font-medium underline md:hidden">
            Clear all
          </button>
          <button
            onClick={handleSubmit}
            className="fixed flex items-center justify-center md:absolute w-10 h-10  rounded-full z-10  right-3 bottom-0 md:top-1/2 -translate-y-1/2 bg-pink-500 text-white "
          >
            <IoSearch className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
