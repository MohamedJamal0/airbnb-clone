export default function PlaceStatus({ status }) {
  const color = {
    'in progress': 'bg-orange-500',
    unlisted: 'bg-gray-500',
    listed: 'bg-green-500',
  };
  return <div className={`w-2 h-2 rounded-full ${color[status]}`}></div>;
}
