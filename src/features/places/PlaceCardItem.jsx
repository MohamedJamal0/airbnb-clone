import Carousel from '../../components/Carousel';
import { Link, useSearchParams, createSearchParams } from 'react-router-dom';
export default function PlaceCardItem({ place }) {
  const [urlSearchParams] = useSearchParams();

  return (
    <li className="fade-in group relative">
      <Link
        className="absolute inset-0 z-10"
        to={`/places/${place.id}?${createSearchParams(urlSearchParams)}`}
      ></Link>
      <div className="overflow-hidden rounded-md">
        <Carousel images={place.place_images} />

        <div className="flex justify-between">
          <h2>{place.title}</h2>
          <span>{place.ratings}</span>
        </div>
      </div>
    </li>
  );
}
