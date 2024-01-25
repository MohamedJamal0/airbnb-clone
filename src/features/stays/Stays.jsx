import { useState } from 'react';
import StaysFilter from './StaysFilter';
import StayCard from './StayCard';
import useStays from './useStays';
import { PiCheckSquareOffset } from 'react-icons/pi';

export default function Stays() {
  const [filter, setFilter] = useState('Upcoming');
  const { stays, isLoading } = useStays(filter);

  return (
    <div>
      <StaysFilter value={filter} onClick={setFilter} isLoading={isLoading} />
      <div className="flex gap-5">
        {stays?.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>

      {stays?.length === 0 && (
        <div className="flex flex-col gap-5 items-center justify-center h-52  bg-slate-50">
          <PiCheckSquareOffset className="w-12 h-12 text-gray-900" />
          <p className=" w-48 text-center text-sm text-gray-900">
            {filter === 'Upcoming' &&
              'You currently don’t have any upcoming guests.'}
            {filter === 'Arriving soon' &&
              'You don’t have any guests arriving today or tomorrow.'}
            {filter === 'Currently hosting' &&
              'You don’t have any guests staying with you right now.'}
            {filter === 'Cheking out' &&
              'You don’t have any guests checking out today or tomorrow.'}
          </p>
        </div>
      )}
    </div>
  );
}
