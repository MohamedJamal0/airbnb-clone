import { useSearchParams } from 'react-router-dom';

export default function BookingFilter() {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  const handleFilter = (status) => () => {
    urlSearchParams.set('status', status);
    urlSearchParams.set('page', 1);
    setUrlSearchParams(urlSearchParams);
  };

  const currentStatus = +urlSearchParams.get('status') || 1;
  return (
    <div role="tablist" className="flex items-center gap-4 mb-5 text-zinc-800 font-medium">
      <button
        role="tab"
        aria-selected={currentStatus === 1}
        onClick={handleFilter(1)}
        className="px-3 py-2 rounded-md hover:bg-gray-100 duration-200 aria-selected:bg-gray-100 "
      >
        Upcoming
      </button>
      <button
        role="tab"
        aria-selected={currentStatus === 2}
        onClick={handleFilter(2)}
        className="px-3 py-2 rounded-md hover:bg-gray-100 duration-200 aria-selected:bg-gray-100 "
      >
        Checked in
      </button>
      <button
        role="tab"
        aria-selected={currentStatus === 3}
        onClick={handleFilter(3)}
        className="px-3 py-2 rounded-md hover:bg-gray-100 duration-200 aria-selected:bg-gray-100 "
      >
        Checked out
      </button>
      <button
        role="tab"
        aria-selected={currentStatus === ''}
        onClick={handleFilter('')}
        className="px-3 py-2 rounded-md hover:bg-gray-100 duration-200 aria-selected:bg-gray-100 "
      >
        All
      </button>
    </div>
  );
}
