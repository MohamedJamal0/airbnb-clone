import InputCounter from '../../components/InputCounter';
import useClickOutside from '../../hooks/useClickOutside';
import { useState } from 'react';

export default function GuestsSelector({ onChange, values }) {
  const { numAdults, numChildren, numInfants } = values;

  const [isShow, setIsShow] = useState(false);

  const totalGuests = numAdults + numChildren + numInfants;

  const { ref } = useClickOutside(() => setIsShow(false));

  return (
    <div ref={ref} className="md:flex-1">
      <button
        type="button"
        onClick={() => setIsShow(!isShow)}
        className={
          'w-full px-6 py-3 rounded-full text-left duration-100 hover:bg-gray-100'
        }
      >
        <span className="font-semibold block">Who</span>
        <div className="text-gray-400">
          {totalGuests ? `${totalGuests} guests` : 'Add guests'}
        </div>
      </button>
      {isShow && (
        <div className="md:absolute mt-3 right-0 w-full  md:w-[50%] p-8 rounded-3xl border shadow-2xl z-10 bg-white">
          <InputCounter
            title="Adults"
            caption="ages 13 or above"
            value={numAdults}
            onChange={(value) => onChange({ numAdults: value })}
          />
          <InputCounter
            title="Children"
            caption="ages 2–12"
            value={numChildren}
            onChange={(value) => onChange({ numChildren: value })}
          />
          <InputCounter
            title="Infants"
            caption="under 2"
            value={numInfants}
            onChange={(value) => onChange({ numInfants: value })}
          />
        </div>
      )}
    </div>
  );
}
