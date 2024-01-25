export default function StaysFilter({ onClick, value, isLoading }) {
  const options = [
    'Cheking out',
    'Currently hosting',
    'Arriving soon',
    'Upcoming',
  ];
  return (
    <div className="flex gap-4 mb-8">
      {options.map((option) => (
        <button
          type="button"
          aria-checked={value === option}
          role="radio"
          disabled={isLoading}
          key={option}
          onClick={() => onClick(option)}
          className="px-4 py-2 rounded-full border text-sm aria-checked:border-black aria-checked:bg-gray-100 duration-200"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
