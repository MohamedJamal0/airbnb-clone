export default function Input({ id, type, name, label, ...props }) {
  return (
    <div className="  px-2 py-2 mb-3 border  rounded-md focus-within:border-black flex-1 ">
      <label htmlFor={id} className=" text-gray-400">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        {...props}
        className=" block w-full"
      />
    </div>
  );
}
