import React, { useEffect } from 'react';
import useUser from '../features/auth/useUser';
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

  if (isLoading)
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        Loading...
      </div>
    );

  if (isHost) return children;
}
