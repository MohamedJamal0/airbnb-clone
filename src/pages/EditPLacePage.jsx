import { Outlet } from 'react-router-dom';
import useEditedPlace from '../features/hosting/places/hooks/useEditedPlace';
import { Sidebar } from '../features/hosting/places/Sidebar';
import HostingPageLoading from '../components/HostingPageLoading';

export default function EditPlacePage() {
  const { editedPlace, isLoading } = useEditedPlace();

  if (isLoading) return <HostingPageLoading />;

  return (
    <div className="md:h-[calc(100vh-80px)] ">
      <div className="flex flex-col h-full md:flex-row">
        <Sidebar editedPlace={editedPlace} />
        <div className="relative flex-[3] h-full md:overflow-y-scroll">
          <div className="max-w-3xl mx-auto py-8 px-[2%]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
