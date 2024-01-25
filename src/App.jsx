import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import useUser from './features/auth/useUser';
import PlacePage from './pages/PlacePage';

import HostPlacesPage from './pages/HostPlacesPage';
import HostingLayoutPage from './pages/HostingLayoutPage';
import PlaceEditorPage from './pages/EditPLacePage';
import EditPlaceTitle from './features/places/host/edit-place/EditPlaceTitle';
import EditPlaceSummary from './features/places/host/edit-place/EditPlaceSummary';
import EditPlaceCategory from './features/places/host/edit-place/EditPlaceCategory';

import EditPlaceLocation from './features/places/host/edit-place/EditPlaceLocation';
import EditPlaceType from './features/places/host/edit-place/EditPlaceType';
import EditPlaceAmenities from './features/places/host/edit-place/EditPlaceAmenities';
import EditPlaceImages from './features/places/host/edit-place/EditPlaceImages';
import EditPlacePlan from './features/places/host/edit-place/EditPlacePlan';
import BookingPage from './pages/BookingPage';
import HostTodayPage from './pages/HostTodayPage';
import ProtectRoute from './components/ProtectRoute';
import EditPlaceStatus from './features/places/host/edit-place/EditPlaceStatus';
import HostingBookingsPage from './pages/HostingBookingsPage';

function App() {
  useUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/places/:placeId',
      element: <PlacePage />,
    },
    { path: '/book/:placeId', element: <BookingPage /> },
    {
      path: '/hosting',
      element: (
        <ProtectRoute>
          <HostingLayoutPage />
        </ProtectRoute>
      ),
      children: [
        { path: 'today', element: <HostTodayPage />, index: true },
        { path: 'bookings', element: <HostingBookingsPage /> },
        { path: 'places', element: <HostPlacesPage /> },

        {
          path: 'places/editor/:placeId',
          element: <PlaceEditorPage />,

          children: [
            { path: 'status', element: <EditPlaceStatus /> },
            { path: 'title', element: <EditPlaceTitle /> },
            { path: 'summary', element: <EditPlaceSummary /> },
            { path: 'amenities', element: <EditPlaceAmenities /> },
            { path: 'type', element: <EditPlaceType /> },
            { path: 'category', element: <EditPlaceCategory /> },
            { path: 'location', element: <EditPlaceLocation /> },
            { path: 'Plan', element: <EditPlacePlan /> },
            { path: 'photos', element: <EditPlaceImages /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
