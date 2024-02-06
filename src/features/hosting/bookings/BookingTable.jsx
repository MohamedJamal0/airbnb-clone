import Table from '../../../components/Table';
import BookingRow from './BookingRow';
import Pagination from '../../../components/Pagination';

const BookingTable = ({ bookings }) => {
  return (
    <Table>
      <Table.Header>
        <div role="columnheader">ROOM</div>
        <div role="columnheader">GUEST</div>
        <div role="columnheader">DATES</div>
        <div role="columnheader">STATUS</div>
        <div role="columnheader">AMOUNT</div>
      </Table.Header>
      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      ></Table.Body>
      <Table.Footer>
        <Pagination PAGE_SIZE={10} total={1} />
      </Table.Footer>
    </Table>
  );
};

export default BookingTable;
