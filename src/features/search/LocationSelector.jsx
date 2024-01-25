export default function LocationSelector() {
  return (
    <button
      className={`md:flex-[1] px-6 py-3 rounded-full bg-white md:bg-transparent  hover:bg-white text-left cursor-pointer `}
    >
      <span className=" font-semibold block">Where</span>
      <input
        placeholder="Search Destination"
        className=" bg-transparent  border-none outline-none text-black w-full"
      />
    </button>
  );
}
