export default function PlaceTypeRadioInput({ onClick, value }) {
  
  return (
    <div className="border-b pb-8">
      <h2 className="text-xl font-medium mb-2">Type of place</h2>
      <p className="mb-6 ">Search rooms, entire homes, or any type of place.</p>
      <div
        role="radiogroup"
        className="flex border rounded-md mx-auto W-[700px] max-w-[700px] *:flex-1 *:py-4  overflow-hidden *:text-center *:cursor-pointer"
      >
        <div
          onClick={() => onClick(null)}
          role="radio"
          aria-checked={value === null}
          className="aria-checked:bg-black aria-checked:text-white"
        >
          Any type
        </div>
        <div
          onClick={() => onClick(1)}
          role="radio"
          aria-checked={+value === 1}
          className="border-l border-r aria-checked:bg-black aria-checked:text-white "
        >
          Room
        </div>
        <div
          onClick={() => onClick(2)}
          role="radio"
          aria-checked={+value === 2}
          className="aria-checked:bg-black aria-checked:text-white"
        >
          Entire home
        </div>
      </div>
    </div>
  );
}