import { useEffect } from 'react';
import useUser from '../features/auth/hooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function ProtectRoute({ children }) {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  const isHost = user?.isHost;

  useEffect(() => {
    if (!isHost && !isLoading) {
      navigate('/');
    }
  }, [user, isLoading]);

  if (isLoading) return null;

  if (isHost) return children;
}
