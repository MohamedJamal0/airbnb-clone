import HostingHeader from '../layout/HostingHeader';
import { Outlet } from 'react-router-dom';
export default function HostingLayoutPage() {
  return (
    <>
      <HostingHeader />
      <div>
        <Outlet />
      </div>
    </>
  );
}
