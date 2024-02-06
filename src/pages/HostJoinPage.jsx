import { useEffect } from 'react';
import Logo from '../components/Logo';

import CreateHostForm from '../features/auth/CreateHostForm';
import LoginForm from '../features/auth/LoginForm';
import SignupModal from '../features/auth/SignupModal';

import useUser from '../features/auth/hooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function HostJoinPage() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user && user.isHost) {
      navigate('/hosting/places');
    }
  }, [isLoading, user]);

  if (isLoading) return null;

  return (
    <div>
      <div className="flex items-center justify-between h-20 px-[5%] border-b">
        <Logo />
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-1 px-[5%] py-10">
          <h1 className=" max-w-80 mb-4 text-4xl font-medium">
            Unlock the Potential of Your Space
          </h1>
          <p className="max-w-md mb-4 text-gray-700">
            Maximize your space's potential. Start hosting today and turn your
            property into a hub for unforgettable experiences and extra income.
          </p>
          {user && <CreateHostForm />}
          {!user && (
            <div>
              <h2 className="mb-6 text-xl font-medium">
                Log in or sign up to Continue
              </h2>
              <LoginForm />
              <div className="text-sm flex items-center gap-2 ">
                if you don't have an account
                <div className="*:px-0 *:font-medium *:underline ">
                  <SignupModal />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 h-[80vh] bg-gray-200">
          <img
            src="https://www.thebalancemoney.com/thmb/3NU0szxSI829qQkectlqDNYyFQM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Profitable_AirbnbHosting_GettyImages-932778742-657e0f7ae3204baba95e804c4dcb6292.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
