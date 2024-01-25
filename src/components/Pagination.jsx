import { useSearchParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ total, PAGE_SIZE }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +searchParams.get('page') || 1;

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage * PAGE_SIZE >= total;
  const isPaginationDisabled = total <= PAGE_SIZE;

  const start = isPaginationDisabled ? 1 : PAGE_SIZE * (currentPage - 1) + 1;
  const end = nextDisabled ? total : currentPage * PAGE_SIZE;

  const handlePrev = () => {
    if (prevDisabled) return;
    searchParams.set('page', currentPage - 1);
    setSearchParams(searchParams);
  };

  const handleNext = () => {
    if (nextDisabled) return;
    searchParams.set('page', currentPage + 1);
    setSearchParams(searchParams);
  };

  if (isPaginationDisabled)
    return (
      <div className="text-sm">{`Showing ${start} to ${end}  of ${total} results`}</div>
    );

  return (
    <div className=" flex justify-between items-center text-sm">
      <div>{`Showing ${start} to ${end}  of ${total} results`}</div>
      <div className="flex  gap-4 ">
        <button
          onClick={handlePrev}
          type="button"
          title="Previous"
          className=" flex items-center gap-1   rounded-md hover:pg-pink-500 hover:text-pink-500 duration-300"
          disabled={prevDisabled}
        >
          <FaChevronLeft className="w-4 h-4 font-bold" />
          <span>Previous</span>
        </button>
        <button
          onClick={handleNext}
          type="button"
          title="Next"
          className="flex items-center gap-1  rounded-md hover:pg-pink-500  hover:text-pink-500 duration-300"
          disabled={nextDisabled}
        >
          <span>Next</span>
          <FaChevronRight className="w-4 h-4 font-bold" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
