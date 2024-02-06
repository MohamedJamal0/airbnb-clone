import { FaStar } from 'react-icons/fa';

export default function StarRating({ rating, onChange }) {
  return (
    <div className="flex gap-2 cursor-pointer">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          onClick={() => onChange(i + 1)}
          className={`w-8 h-8 ${i < rating ? 'text-black' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}
