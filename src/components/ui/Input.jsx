export default function Input({ id, type, name, label, ...props }) {
  return (
    <div className="  px-2 py-2 mb-3 border border-gray-500 rounded-md focus-within:ring-2  flex-1 ">
      <label  htmlFor={id} className="block text-gray-500">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        {...props}
        className=" block w-full bg-transparent"
      />
    </div>
  );
}
