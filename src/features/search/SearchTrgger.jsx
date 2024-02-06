import { IoSearch } from 'react-icons/io5';
import useIsMobile from '../../hooks/useIsMobile.jsx';
import useSearchParamsFromUrl from '../../hooks/useSearchParamsFromUrl';
import { formatDate } from '../../utils/helper';

export default function SearchTrigger({ onToggle }) {
  const { isMobile } = useIsMobile();

  const { city, startDate, endDate, numAdults, numChildren, numInfants } =
    useSearchParamsFromUrl();

  const guest = numAdults + numChildren + numInfants;
  const location = city || 'Add location';
  const fomrattedDate =
    startDate && endDate
      ? `${formatDate(startDate, 'MMM dd')} - ${formatDate(endDate, 'MMM dd')}`
      : 'Add dates';

  if (isMobile)
    return (
      <div
        onClick={onToggle}
        className="flex gap-3 items-center min-w-60 w-full h-14 px-4  rounded-full border-2 text-sm md:text-xs"
      >
        <IoSearch className="w-6 h-6" />
        <div>
          <span className="font-medium">{location}</span>
          <div className="text-gray-500">
            <span className="mr-2">{fomrattedDate}</span>
            <span>{guest ? `${guest} guests` : 'Add guests'}</span>
          </div>
        </div>
      </div>
    );

  if (!isMobile)
    return (
      <div
        onClick={() => onToggle(true)}
        className={`relative    flex items-center h-12 w-[22.5rem] rounded-full border-2 text-sm  shadow-sm cursor-pointer hover:shadow-md duration-200 `}
      >
        <span className="px-4 border-r-[1px] border-gray-300 font-medium">
          {location}
        </span>

        <span className="px-4 border-r-[1px] border-gray-300 font-medium">
          {fomrattedDate}
        </span>

        <span className="px-4 text-gray-400">{`${
          guest ? `${guest} guests` : 'Add guests'
        }`}</span>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary bg-pink-500 text-white mr-2 ">
          <IoSearch className="w-4 h-4" />
        </button>
      </div>
    );
}
