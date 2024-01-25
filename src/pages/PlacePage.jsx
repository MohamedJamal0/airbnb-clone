import usePlace from '../features/places/usePlace';
import { FaStar } from 'react-icons/fa';
import Reviews from '../features/reviews/Reviews';
import BookingSelectDates from '../features/booking/BookingSelectDates';
import Logo from '../components/Logo';
import UserMenu from '../features/auth/UserMenu';
import AvailabilityWidget from '../features/booking/AvailabilityWidget';

export default function PlacePage() {
  const { place, isLoading } = usePlace();

  if (isLoading) return <div>Loading...</div>;

  const {
    title,
    images,
    num_beds,
    num_rooms,
    num_bathrooms,
    city,
    num_reviews,
    average_rating,
    summary,
    min_nights,
    price_per_night,
    max_guests,
  } = place;
  return (
    <div>
      <header className="border-b">
        <div className=" flex items-center justify-between h-20 max-w-7xl mx-auto ">
          <Logo />
          <UserMenu />
        </div>
      </header>
      <div className="max-w-7xl mx-auto pb-10">
        <h1 className="text-xl font-medium py-5 ">{title}</h1>
        <PlaceImageGallery images={images} />
        <div className="grid grid-cols-3 gap-10 border-b">
          <div className="col-span-2">
            <PlaceDetails
              city={city}
              numBeds={num_beds}
              numBathrooms={num_bathrooms}
              numRooms={num_rooms}
              summary={summary}
              numReviews={num_reviews}
              averageRating={average_rating}
            />
            <BookingSelectDates min_nights={min_nights} />
          </div>
          <div className="relative col-span-1">
            <AvailabilityWidget
              pricePerNight={price_per_night}
              maxGuests={max_guests}
            />
          </div>
        </div>
        <div className="py-12 border-b">
          <Reviews numReviews={num_reviews} averageRating={average_rating} />
        </div>
      </div>
    </div>
  );
}

export function PlaceDetails({
  city,
  numBeds,
  numBathrooms,
  numRooms,
  numReviews,
  averageRating,
  summary,
}) {
  return (
    <>
      <div className="py-8 border-b">
        <div className="text-xl">{city}</div>
        <span className="text-gray-500">{` ${numBeds} beds · ${numBathrooms} baths · ${numRooms} rooms`}</span>
        <div className="flex items-center gap-2 mt-3  ">
          <FaStar className="mt-1" />
          {numReviews > 0 && (
            <span className="font-medium underline cursor-pointer">
              {`${averageRating.toFixed(2)} · ${numReviews} reviews`}
            </span>
          )}
          {numReviews === 0 && <span>No reviews yet</span>}
        </div>
      </div>
      <p className="py-6 border-b text-gray-700">{summary}</p>
      <div className=" py-12 border-b">
        <h2 className="mb-6 text-xl font-medium">What this place offers</h2>
        <div className="flex flex-col gap-3">
          <div>Wifi</div>
          <div>Wifi</div>
          <div>Wifi</div>
          <div>kitchen</div>
        </div>
      </div>
    </>
  );
}

export function PlaceImageGallery({ images }) {
  return (
    <div className="grid grid-cols-5  grid-rows-2 max-h-[28rem] gap-1 [&>*:first-child]:col-span-3 [&>*:first-child]:row-span-2 ">
      {images.map((image) => (
        <img
          key={image}
          className="w-full h-full rounded-md bg-cover"
          src={image}
        />
      ))}
    </div>
  );
}
