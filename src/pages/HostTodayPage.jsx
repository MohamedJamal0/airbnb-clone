import { Link } from 'react-router-dom';
import Stays from '../features/hosting/stays/Stays';
import useGetStaysCounts from '../features/hosting/stays/hooks/useGetStaysCounts';
import HostingPageLoading from '../components/HostingPageLoading';
export default function HostTodayPage() {
  const { staysCounts, isStaysCountsLoading } = useGetStaysCounts();

  if (isStaysCountsLoading) return <HostingPageLoading />;

  const { all_reservations } = staysCounts;

  return (
    <div className="max-w-[1280px] mx-auto px-[3%] py-16">
      <h1 className="text-4xl font-medium mb-14">Welcome back , Ali</h1>

      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-medium">Your reservations</h2>
        <Link to={'/hosting/bookings'} className="p-2 font-medium underline">
          {`All reservations (${all_reservations})`}
        </Link>
      </div>
      <Stays />
    </div>
  );
}
