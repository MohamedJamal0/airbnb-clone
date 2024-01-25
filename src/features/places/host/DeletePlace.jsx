import Modal from '../../../components/ui/Modal';
import useToggle from '../../../hooks/useToggle';
import useDeletePlace from './useDeletePlace';
export default function DeletePlace({ placeId }) {
  const { toggle, handleToggle } = useToggle();
  const { deletePlace, isLoading } = useDeletePlace();
  const handleDelete = async() => {
   await deletePlace(placeId);
    handleToggle();
  };
  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="px-2 py-1">Remove place</Modal.Open>
      <Modal.Window>
        <Modal.Header>Remove place</Modal.Header>
        <Modal.Body>
          <div className="p-6 w-[30vw]">
            <p>Are you sure you want to remove this place?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button className="text-gray-500" onClick={handleToggle}>
                Cancel
              </button>
              <button
                disabled={isLoading}
                onClick={handleDelete}
                className="bg-red-500 text-white px-2 py-1 rounded-md"
              >
                {isLoading ? 'Removing...' : 'Remove'}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
