import { categories } from '../../data';
import { useSearchParams } from 'react-router-dom';
import { TbCategory } from 'react-icons/tb';

export default function PlaceCategory() {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  const handleNavigate = (categoryId) => {
    urlSearchParams.set('category', categoryId);
    setUrlSearchParams(urlSearchParams);
  };

  const category = urlSearchParams.get('category');

  const removeCategory = () => {
    urlSearchParams.delete('category');
    setUrlSearchParams(urlSearchParams);
  };
  return (
    <ul className="flex justify-between flex-1 gap-10  overflow-x-auto text-sm">
      <li
        data-active={!category}
        onClick={removeCategory}
        className="flex flex-col items-center gap-1 pb-1 shrink-0 cursor-pointer transition hover:text-black border-gray-600 data-[active=true]:border-b-2"
      >
        <TbCategory className="w-6 h-6" />
        <span>All</span>
      </li>
      {categories.map(({ id, categoryName, Icon }, index) => (
        <li
          key={index}
          data-active={id === +category}
          onClick={() => handleNavigate(id)}
          className="flex flex-col items-center gap-1 pb-1 shrink-0 cursor-pointer transition hover:text-black border-gray-600 data-[active=true]:border-b-2"
        >
          <Icon className="w-6 h-6" />
          <span>{categoryName}</span>
        </li>
      ))}
    </ul>
  );
}
