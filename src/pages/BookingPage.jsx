import { FaChevronLeft, FaStar } from 'react-icons/fa';
import Logo from '../components/Logo';
import CreateBooking from '../features/booking/CreateBooking';
import { formatDate } from '../utils/helper';
import useSearchParamsFromUrl from '../hooks/useSearchParamsFromUrl';
import useCheckAvailabilty from '../features/booking/useCheckAvailabilty';
import { useParams } from 'react-router-dom';
import { IoIosAlert } from 'react-icons/io';
import { IoAlertCircleOutline } from 'react-icons/io5';

export default function BookingPage() {
  const { startDate, endDate, numAdults, numChildren, numInfants } =
    useSearchParamsFromUrl();
  const totalGuests = numAdults + numChildren + numInfants || 1;

  const { placeId } = useParams();

  const { isAvailable, isLoading } = useCheckAvailabilty({
    placeId,
    startDate,
    endDate,
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <div className="flex items-center h-20 px-6 border-b">
        <Logo />
      </div>
      <div className="max-w-7xl px-[5%] mx-auto">
        <div className="flex items-center  pt-16 pb-8 ">
          <button className="flex items-center justify-center w-12 h-12 -ml-12">
            <FaChevronLeft />
          </button>
          <h1 className="font-medium text-3xl">Request to Book</h1>
        </div>
        <div className="flex flex-col-reverse gap-7  lg:flex-row lg:gap-0">
          <div className="flex-1">
            {isAvailable && (
              <div>
                <h2 className="mb-6 font-medium text-xl">Your Trip</h2>
                <div className="mb-6">
                  <div className=" mb-1 font-medium">Dates</div>
                  <div className="text-gray-600">{`${formatDate(
                    startDate,
                    'dd MMM'
                  )} - ${formatDate(endDate, 'dd MMM')}`}</div>
                </div>
                <div className="mb-6">
                  <div className="font-medium">Guests</div>
                  <div className="text-gray-600"> {totalGuests} guest</div>
                </div>
                <div className="pt-8 pb-12 border-t ">
                  <CreateBooking />
                </div>
              </div>
            )}
            {!isAvailable && (
              <div className=" flex  gap-5 p-5 border rounded-md ">
                <IoIosAlert className="w-14 h-14 text-red-600" />
                <div>
                  <h3 className="font-medium">
                    This place is no longer available
                  </h3>
                  <p>
                    Edit your dates to get updated pricing or search for another
                    place to stay.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="relative flex-1 ">
            <div className="p-6 lg:absolute lg:right-0 lg:w-[80%] rounded-md border">
              <div className="flex flex-wrap gap-2 pb-6 border-b">
                <img className=" w-32 h-24 rounded-md" src="" alt="" />
                <div className="flex flex-col">
                  <div className="text-xs text-gray-400 mb-1">Entire home </div>
                  <div className="text-sm">Villa Nur, Beachfront Villa</div>
                  <div className="flex items-center gap-1 text-sm  ">
                    <FaStar className="w-3 h-3" />
                    <span className="font-medium">5.00</span>
                    <span className="text-gray-400">(10 reviews)</span>
                  </div>
                </div>
              </div>
              {isAvailable ? (
                <div>
                  <div className="pb-6 border-b">
                    <h2 className="my-6 text-xl font-medium">Price details</h2>
                    <div className="flex justify-between">
                      <div>$226.11 x 10 nights</div>
                      <div>$2,261.10</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 font-medium   ">
                    <div>Total</div>
                    <div>$2,261.10</div>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-600 font-medium my-6">
                  <IoAlertCircleOutline className="w-8 h-8 mx-auto my-4" />
                  <p className="text-center px-12">
                    It looks like someone else just requested a reservation for
                    the same dates. If you’re set on this place, change your
                    trip dates and try again.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
