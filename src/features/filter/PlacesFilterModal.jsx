import Modal from '../../components/ui/Modal';
import useSearchParamsFromUrl from '../../hooks/useSearchParamsFromUrl';
import useToggle from '../../hooks/useToggle';
import PlacesFilterForm from './PlacesFilterForm';

export default function PlacesFilterModal() {
  const { toggle, handleToggle } = useToggle();
  const { type, minPrice, maxPrice, amenities } = useSearchParamsFromUrl();

  let numFilters = 0;
  if (type) numFilters++;
  if (minPrice) numFilters++;
  if (maxPrice) numFilters++;
  if (amenities) numFilters++;

  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open
        className={`relative h-full py-2 px-6 border rounded-md  text-sm ${
          numFilters && 'border-black'
        }`}
      >
        <span>Filters</span>
        {Boolean(numFilters) && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center text-white bg-black rounded-full w-5 h-5 ">
            {numFilters}
          </span>
        )}
      </Modal.Open>
      <Modal.Body>
        <Modal.Window>
          <Modal.Header>Filters</Modal.Header>
          <Modal.Body>
            <PlacesFilterForm onClose={handleToggle} />
          </Modal.Body>
        </Modal.Window>
      </Modal.Body>
    </Modal>
  );
}
