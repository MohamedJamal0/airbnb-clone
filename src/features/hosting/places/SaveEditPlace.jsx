export default function SaveEditPlace({ onSave, loading , isDisapled }) {
  return (
    <div className="flex justify-end w-full py-8 ">
      <button
        onClick={onSave}
        disabled={loading || isDisapled}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
