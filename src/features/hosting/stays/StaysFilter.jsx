import useGetStaysCounts from './hooks/useGetStaysCounts';

export default function StaysFilter({ onClick, value, isLoading }) {
  const { staysCounts } = useGetStaysCounts();

  const { arriving_stays, current_stays, leaving_stays, upcoming_stays } =
    staysCounts;

  const options = [
    { label: 'Upcoming', count: upcoming_stays },
    {
      label: 'Arriving soon',
      count: arriving_stays,
    },
    {
      label: 'Currently hosting',
      count: current_stays,
    },
    {
      label: 'Cheking out',
      count: leaving_stays,
    },
  ];

  return (
    <div role="radiogroup" className="flex flex-wrap gap-4 mb-8">
      {options.map(({ label, count }) => (
        <button
          type="button"
          aria-checked={value === label}
          role="radio"
          disabled={isLoading}
          key={label}
          onClick={() => onClick(label)}
          className="px-4 py-2 rounded-full border text-sm aria-checked:border-black aria-checked:bg-gray-100 duration-200"
        >
          {`${label} (${count})`}
        </button>
      ))}
    </div>
  );
}
