import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className='flex items-center gap-3' to="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBi3Vtw52GqbfLxuS8RsQOmfLVsLmLhY9cA&usqp=CAU"
        alt=""
        className='w-8 h-8'
      />
      <span className=" font-bold text-primary hidden lg:block text-2xl text-pink-500">
        airbnb
      </span>
    </Link>
  );
}
