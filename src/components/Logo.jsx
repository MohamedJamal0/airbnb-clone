import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className=" hidden md:block">
      <Link to="/">
        <span className=" font-bold text-primary text-3xl text-pink-500">
          Airbnb
        </span>
      </Link>
    </div>
  );
}
