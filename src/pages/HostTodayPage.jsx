import { Link } from 'react-router-dom';
import Stays from '../features/stays/Stays';

export default function HostTodayPage() {
  return (
    <div className='max-w-[1280px] mx-auto px-[3%] py-16'>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-medium">Your reservations</h2>
        <Link to={'/hosting/bookings'} className="p-2 font-medium underline">
          All reservations
        </Link>
      </div>
      <Stays />
    </div>
  );
}
