import Logo from '../components/Logo';
import UserMenu from '../features/auth/UserMenu';
import { Link } from 'react-router-dom';
import TripCard from '../features/trips/TripCard';
import useTrips from '../features/trips/hooks/useTrips';
import Loading from '../components/ui/Loading';

export default function TripsPage() {
  const { trips, isLoading } = useTrips();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center h-20 px-[5%] border-b">
        <Logo />
        <UserMenu />
      </div>
      <div className="px-[5%]">
        <h1 className="py-6  font-medium text-3xl">Trips</h1>
        {trips.length === 0 && (
          <div className="py-12 border-b border-t">
            <h2 className="font-medium text-2xl mb-2">
              No trips booked...yet!
            </h2>
            <p className="text-lg mb-4">
              Time to dust off your bags and start planning your next adventure
            </p>
            <Link
              to={'/'}
              className="inline-block py-3 px-6 rounded-md border border-black  font-medium hover:bg-slate-100 duration-200"
            >
              Start searching
            </Link>
          </div>
        )}
        {trips.length > 0 && (
          <div className=" py-12">
            <ul className="flex flex-col gap-8">
              {trips.map((trip) => (
                <TripCard key={trip.booking_id} trip={trip} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
