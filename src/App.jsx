import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import useUser from './features/auth/hooks/useUser';
import PlacePage from './pages/PlacePage';

import HostPlacesPage from './pages/HostPlacesPage';
import HostingLayoutPage from './pages/HostingLayoutPage';
import PlaceEditorPage from './pages/EditPLacePage';
import EditPlaceTitle from './features/hosting/places/EditPlaceTitle';
import EditPlaceSummary from './features/hosting/places/EditPlaceSummary';
import EditPlaceCategory from './features/hosting/places/EditPlaceCategory';

import EditPlaceLocation from './features/hosting/places/EditPlaceLocation';
import EditPlaceType from './features/hosting/places/EditPlaceType';
import EditPlaceAmenities from './features/hosting/places/EditPlaceAmenities';
import EditPlaceImages from './features/hosting/places/EditPlaceImages';
import EditPlacePlan from './features/hosting/places/EditPlacePlan';
import BookingPage from './pages/BookingPage';
import HostTodayPage from './pages/HostTodayPage';
import ProtectRoute from './components/ProtectRoute';
import EditPlaceStatus from './features/hosting/places/EditPlaceStatus';
import HostingBookingsPage from './pages/HostingBookingsPage';
import HostJoinPage from './pages/HostJoinPage';
import TripsPage from './pages/TripsPage';

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
    { path: 'host/homes', element: <HostJoinPage /> },
    { path: 'trips', element: <TripsPage /> },
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
