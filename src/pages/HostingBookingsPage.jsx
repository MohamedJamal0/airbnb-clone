import BookingFilter from '../features/booking/BookingFilter';
import BookingTable from '../features/booking/BookingTable';

export default function HostingBookingsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-[3%] py-16">
      <h1 className="text-3xl font-medium mb-6">Reservations</h1>
      <BookingFilter />
      <BookingTable />
    </div>
  );
}
