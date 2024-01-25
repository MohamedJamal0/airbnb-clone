import { FaStar } from 'react-icons/fa';

export default function Stars({ stars }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={stars >= i + 1 ? 'text-black-500' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}
