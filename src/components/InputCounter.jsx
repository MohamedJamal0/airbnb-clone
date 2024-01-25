const Counter = ({ value, onChange, maxValue, minValue }) => {
  const handleIncrementCounter = () => {
    if (value === maxValue) return;
    onChange(value + 1);
  };

  const handleDecrementCounter = () => {
    if (value === minValue) return;
    onChange(value - 1);
  };

  return (
    <div className="flex items-center gap-3 ">
      <button
        type="button"
        onClick={handleDecrementCounter}
        disabled={value === minValue}
        className="w-8 h-8 rounded-full border flex items-center justify-center"
      >
        -
      </button>
      <div>{value || 0}</div>
      <button
        type="button"
        onClick={handleIncrementCounter}
        disabled={value === maxValue}
        className="w-8 h-8 rounded-full border flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default function InputCounter({
  title,
  caption,
  value,
  onChange,
  maxValue = 100,
  minValue = 0,
}) {
  return (
    <div className="flex justify-between  border-b-[1px] py-3">
      <div>
        <h4 className="text-lg mb-1">{title}</h4>
        <p className=" text-gray-400 text-sm">{caption}</p>
      </div>
      <Counter
        value={value}
        onChange={onChange}
        maxValue={maxValue}
        minValue={minValue}
      />
    </div>
  );
}
