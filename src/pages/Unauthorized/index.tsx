import { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const [mountLoading, setMountLoading] = useState(false);

  const navigate = useNavigate();
  const redirectToLogin = () => navigate('/login', { replace: true });

  useEffect(() => {
    setTimeout(() => setMountLoading(true), 800);
    setTimeout(() => setMountLoading(false), 2000);
    setTimeout(() => redirectToLogin(), 2000);

    () => {
      return clearTimeout;
    };
  }, []);

  return (
    <div className="h-screen w-screen items-center justify-center flex flex-col gap-2">
      <h1>401 Unauthorized Error</h1>
      {mountLoading && (
        <div className="flex gap-2 items-center justify-center">
          <Spinner size="sm" />
          <h1>Redirecting to Login</h1>
        </div>
      )}
    </div>
  );
}
