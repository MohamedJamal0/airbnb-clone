import { FaStar } from 'react-icons/fa';
import Carousel from '../../components/Carousel';
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from 'react-router-dom';
export default function PlaceCardItem({ place }) {
  const [urlSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const { id, city, country, images, avg_rating, price_per_night } = place;

  const handleOnClick = () => {
    navigate(`/places/${id}?${createSearchParams(urlSearchParams)}`);
    window.scrollTo(0, 0);
  };

  return (
    <li
      onClick={handleOnClick}
      className="fade-in group relative cursor-pointer"
    >
      <div className="overflow-hidden rounded-md">
        <Carousel images={images} />
        <div className="flex justify-between mt-2">
          <h2 className="font-medium">{`${city}, ${country}`}</h2>
          {place.avg_rating && (
            <div className="flex items-center gap-1">
              <FaStar />
              <span>{avg_rating.toFixed(2)}</span>
            </div>
          )}
        </div>
        <div className="mt-1">
          <span className="font-medium">${price_per_night}</span>
          <span className="text-sm"> night</span>
        </div>
      </div>
    </li>
  );
}
