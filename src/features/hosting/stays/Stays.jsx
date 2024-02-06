import { useState } from 'react';
import StaysFilter from './StaysFilter';
import StayCard from './StayCard';
import useStays from './hooks/useStays';
import { PiCheckSquareOffset } from 'react-icons/pi';
import StayCardSkeleton from './StayCardSkeleton';

export default function Stays() {
  const [filter, setFilter] = useState('Upcoming');
  const { stays, isLoading } = useStays(filter);

  let noResultsMessage;

  if (filter === 'Upcoming') {
    noResultsMessage = 'You currently don’t have any upcoming guests.';
  }
  if (filter === 'Arriving soon') {
    noResultsMessage = 'You don’t have any guests arriving today or tomorrow.';
  }
  if (filter === 'Currently hosting') {
    noResultsMessage = 'You don’t have any guests staying with you right now.';
  }
  if (filter === 'Cheking out') {
    noResultsMessage =
      'You don’t have any guests checking out today or tomorrow.';
  }

  console.log(stays);
  return (
    <div>
      <StaysFilter value={filter} onClick={setFilter} isLoading={isLoading} />
      <div className="flex flex-wrap gap-4 *:basis-80">
        {!isLoading &&
          stays?.map((stay) => <StayCard key={stay.id} stay={stay} />)}
        {isLoading &&
          Array.from({ length: 3 }, (_, i) => <StayCardSkeleton key={i} />)}
      </div>

      {stays?.length === 0 && (
        <div className="flex flex-col gap-5 items-center justify-center h-52  bg-slate-50">
          <PiCheckSquareOffset className="w-12 h-12 text-gray-900" />
          <p className=" w-48 text-center text-sm text-gray-900">
            {noResultsMessage}
          </p>
        </div>
      )}
    </div>
  );
}
