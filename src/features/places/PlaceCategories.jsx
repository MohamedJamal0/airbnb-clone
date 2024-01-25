import { categories } from '../../data';
import { useSearchParams } from 'react-router-dom';

export default function PlaceCategory() {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  const handleNavigate = (categoryId) => {
    urlSearchParams.set('category', categoryId);
    setUrlSearchParams(urlSearchParams);
  };
  return (
    <ul className=" flex justify-between flex-1 gap-10 overflow-hidden  text-sm text-gray-800">
      {categories.map(({ id, categoryName, Icon }, index) => (
        <li
          key={index}
          onClick={() => handleNavigate(id)}
          className="flex flex-col items-center gap-1 shrink-0 cursor-pointer transition hover:text-black"
        >
          <Icon className="w-6 h-6" />
          <span>{categoryName}</span>
        </li>
      ))}
    </ul>
  );
}
