import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
export default function Map({ onChange, latitude, longitude }) {
  const getCurrentPosition = () => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      onChange({
        latitude,
        longitude,
      });
    });
  };

  useEffect(() => {
    if (latitude && longitude) return;

    getCurrentPosition();
  }, []);

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ height: '100%', width: '100%', position: 'relative' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} />
        <DetectClick onClick={onChange} />
        <ChangeCenter position={[latitude, longitude]} />
      </MapContainer>
      <button
        type="button"
        className="px-2 py-1 text-sm absolute bottom-2 right-1/2 translate-x-1/2 z-[9999] bg-blue-500 text-white rounded-md "
        onClick={getCurrentPosition}
      >
        My Location
      </button>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick({ onClick }) {
  useMapEvents({
    click: (e) => onClick({ latitude: e.latlng.lat, longitude: e.latlng.lng }),
  });
}
