import BookingFilter from '../features/hosting/bookings/BookingFilter';
import BookingTable from '../features/hosting/bookings/BookingTable';
import useBookings from '../features/hosting/bookings/hooks/useBookings';
import HostingPageLoading from '../components/HostingPageLoading';

export default function HostingBookingsPage() {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <HostingPageLoading />;
  return (
    <div className="max-w-[1280px] mx-auto px-[3%] py-16">
      <h1 className="text-3xl font-medium mb-6">Reservations</h1>
      <BookingFilter />
      <BookingTable bookings={bookings} />
    </div>
  );
}
