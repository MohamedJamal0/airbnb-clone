import useSearchCity from './hooks/useSearchCities';
import useDebounce from '../../hooks/useDebounce';
import { IoLocationOutline } from 'react-icons/io5';
import useClickOutside from '../../hooks/useClickOutside';
import { useState } from 'react';

export default function CitySelector({ initCity, onChange }) {
  const { cities, isLoading } = useSearchCity(initCity);
  const [isShow, setIsShow] = useState(false);
  // const { debouncedCallback } = useDebounce(searchCities, 100);
  const { ref } = useClickOutside(() => setIsShow(false));

  const handleOnChangeSearch = (e) => {
    const value = e.target.value;
    // debouncedCallback(value);
    onChange({ city: value });
  };

  const handleOnClickCity = (value) => {
    onChange({ city: value });
    setIsShow(false);
  };

  return (
    <div ref={ref} className="md:flex-1">
      <label
        htmlFor="cities-search"
        className="block w-full px-6 py-3 rounded-full text-left duration-100 hover:bg-gray-100 cursor-pointer"
      >
        <div>Where</div>
        <input
          onChange={handleOnChangeSearch}
          type="text"
          placeholder="Where are you going?"
          onClick={() => setIsShow(true)}
          id="cities-search"
          value={initCity || ''}
          className="bg-transparent text-gray-600"
        />
      </label>
      {isShow && (
        <div className="py-8 mt-3 w-full rounded-3xl border shadow-3xl text-lg bg-white z-10 md:absolute md:left-0 md:w-1/2 ">
          {cities && (
            <ul className="flex flex-col">
              {cities.map((city, index) => (
                <li
                  onClick={() => handleOnClickCity(city.city)}
                  key={index}
                  className="flex items-center gap-4 py-3 px-8 hover:bg-slate-100 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-slate-300">
                    <IoLocationOutline className="w-6 h-6" />
                  </div>
                  <div>{`${city.city}, ${city.country}`}</div>
                </li>
              ))}
            </ul>
          )}
          {isLoading && <div className="px-8 text-gray-400">Loading...</div>}
          {!initCity && !isLoading && (
            <div className="text-gray-400 px-8">search for a city</div>
          )}
          {cities && !cities.length && <div className="px-8">No results</div>}
        </div>
      )}
    </div>
  );
}
