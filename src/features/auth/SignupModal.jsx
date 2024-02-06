import Modal from '../../components/ui/Modal';
import SignupForm from './SignupForm';
import useToggle from '../../hooks/useToggle';

export default function SignupModal() {
  const { toggle, handleToggle } = useToggle();
  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="px-4 py-2  text-left">Sign up</Modal.Open>
      <Modal.Window>
        <Modal.Header>Register</Modal.Header>
        <Modal.Body className="px-6 py-6 w-[30vw]">
          <SignupForm />
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
