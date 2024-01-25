import { useSearchParams } from 'react-router-dom';
import { format } from 'date-fns';
import { IoSearch } from 'react-icons/io5';
import useIsMobile from '../../hooks/useIsMobile';
export default function SearchTrigger({ onToggle }) {
  const [urlSearchParams] = useSearchParams();
  const { isMobile } = useIsMobile();

  const location = urlSearchParams.get('location') || 'Any where';
  const startDate = urlSearchParams.get('startDate');
  const endDate = urlSearchParams.get('endDate');
  const date = startDate
    ? `${format(new Date(startDate), 'dd MMM')} - ${format(
        new Date(endDate),
        'dd MMM'
      )}`
    : 'Add dates';
  const numAdults = +urlSearchParams.get('numAdults') || 0;
  const numChildren = +urlSearchParams.get('numChildren') || 0;
  const numInfants = +urlSearchParams.get('numInfants') || 0;
  const guest = numAdults + numChildren + numInfants;

  if (isMobile)
    return (
      <div
        onClick={onToggle}
        className="flex gap-3 items-center  h-14 px-4 flex-[1] rounded-full border-2 text-sm md:text-xs"
      >
        <IoSearch className="w-6 h-6" />
        <div>
          <span className="font-medium">{location}</span>
          <div className="text-gray-500">
            <span className="mr-2">{date}</span>
            <span>{guest ? `${guest} guests` : 'Add guests'}</span>
          </div>
        </div>
      </div>
    );

  if (!isMobile)
    return (
      <div
        onClick={() => onToggle(true)}
        className={`relative  flex items-center h-12    rounded-full border-2 text-sm  shadow-sm cursor-pointer hover:shadow-md duration-200 `}
      >
        <span className="px-4 border-r-[1px] border-gray-300 font-medium">
          {location}
        </span>

        <span className="px-4 border-r-[1px] border-gray-300 font-medium">
          {date}
        </span>

        <span className="px-4 text-gray-400">{`${
          guest ? `${guest} guests` : 'Add guests'
        }`}</span>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary bg-pink-500 text-white mr-2 ">
          s
        </button>
      </div>
    );
}
