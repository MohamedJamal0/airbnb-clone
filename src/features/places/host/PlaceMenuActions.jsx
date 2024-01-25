import { Link } from 'react-router-dom';
import Menu from '../../../components/ui/Menu';
import { FaEllipsisVertical } from 'react-icons/fa6';
import DeletePlace from './DeletePlace';

export default function PlaceMenuActions({ placeId }) {
  return (
    <Menu className={'-mb-10 mr-2 flex justify-end'}>
      <Menu.Open className="flex  items-center justify-center rounded-full w-6 h-6 bg-white/80 hover:bg-white ">
        <FaEllipsisVertical className="w-4 h-4" />
      </Menu.Open>
      <Menu.List>
        <Menu.item>
          <Link
            className=" block px-2 py-1"
            to={`/hosting/places/editor/${placeId}`}
          >
            Edit Place
          </Link>
        </Menu.item>
        <Menu.item>
          <DeletePlace placeId={placeId} />
        </Menu.item>
      </Menu.List>
    </Menu>
  );
}
