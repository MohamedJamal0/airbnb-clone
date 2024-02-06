import Stars from '../../components/Stars';
import Modal from '../../components/ui/Modal';
import useToggle from '../../hooks/useToggle';
import CreateReviewForm from './CreateReviewForm';
import EditReviewForm from './EditReviewForm';

export default function ReviewModal({ bookingId, placeId, rating }) {
  const { toggle, handleToggle } = useToggle();
  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="mt-1">
        <Stars stars={rating || 0} />
        <p className="text-xs font-medium">
          {rating ? 'Your review' : 'Leave a review'}
        </p>
      </Modal.Open>
      <Modal.Window>
        <Modal.Header>Rating</Modal.Header>
        <Modal.Body className="p-5 w-[90vw] md:w-[40vw]">
          {!rating && (
            <CreateReviewForm
              onClose={handleToggle}
              bookingId={bookingId}
              placeId={placeId}
            />
          )}
          {rating && (
            <EditReviewForm onClose={handleToggle} bookingId={bookingId} />
          )}
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
