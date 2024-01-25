
export function Select({ options, value, onChange, ...props }) {
  const _value = value || options[0];

  

  return (
    <select
      className="px-2 py-1 rounded-md shadow-sm text-sm cursor-pointer"
      onChange={(e) => onChange(e.target.value)}
      value={_value}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
