import Modal from '../../components/ui/Modal';
import LoginForm from './LoginForm';
import useToggle from '../../hooks/useToggle';
export default function LoginModal() {
  const { toggle, handleToggle } = useToggle();
  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="px-4 py-2 font-medium text-left">Login</Modal.Open>
      <Modal.Window>
        <Modal.Header>Login</Modal.Header>
        <Modal.Body className="w-[400px]">
          <div className="px-6 py-4">
            <h1 className="mb-6 text-lg font-medium">Welecome to AirBnb</h1>
            <LoginForm onCloseModal={handleToggle} />
            <div className="flex gap-2 items-center">
              <div className="flex-1 h-[0.1px] bg-gray-300"></div>
              <span className="text-sm">or</span>
              <div className="flex-1 h-[0.1px] bg-gray-300"></div>
            </div>
            <div className=" flex flex-col gap-1 mt-2">
              <button className="flex justify-between rounded px-7 py-3 border  border-black hover:bg-slate-50  cursor-pointer">
                <div>Continu with Google</div>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
