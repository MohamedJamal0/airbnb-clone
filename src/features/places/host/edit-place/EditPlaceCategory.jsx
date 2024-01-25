import { categories } from '../../../../data';
import SaveEditPlace from './SaveEditPlace';
import useUpdatePlace from './useUpdatePlace';
import { useState } from 'react';
import useEditedPlace from './useEditedPlace';
export default function EditPlaceCategory() {
  const { editedPlace } = useEditedPlace();

  const initValue = editedPlace.category_id || null;
  const [categoryId, setCategoryId] = useState(initValue);

  const { updatePlace, isLoading } = useUpdatePlace();

  return (
    <div>
      <h1 className="text-3xl mb-8">
        Which of these best describes your place?
      </h1>
      <div className="grid grid-cols-3 gap-2" role="radiogroup">
        {categories.map(({ id, categoryName, Icon }) => (
          <button
            type="button"
            role="radio"
            aria-checked={categoryId === id}
            key={id}
            className="w-full h-22 text-left p-5 border rounded-md aria-checked:border-black     aria-checked:bg-gray-100 "
            onClick={() => setCategoryId(id)}
          >
            <Icon className=" w-6 h-6 mb-1" />
            <span>{categoryName[0].toUpperCase() + categoryName.slice(1)}</span>
          </button>
        ))}
      </div>
      <SaveEditPlace
        onSave={() => updatePlace({ category_id: categoryId })}
        loading={isLoading}
      />
    </div>
  );
}
