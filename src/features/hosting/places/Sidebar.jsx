import Box from '../../../components/ui/Box';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { getAmenity, getPlaceCategory, getPlaceType } from '../../../data';

export function Sidebar({ editedPlace }) {
  const {
    title,
    amenities,
    summary,
    place_type_id,
    category_id,
    address,
    city,
    country,
    place_images,
    num_beds,
    num_rooms,
    num_bathrooms,
    max_guests,
    is_listed,
  } = editedPlace;

  const isCompleted =
    amenities?.length > 0 &&
    summary &&
    place_type_id &&
    category_id &&
    place_images.length > 0;

  return (
    <div className="basis-1/3 pt-8   border-r md:py-12 ">
      <div className="flex items-center gap-4 px-[5%]">
        <Link to={'/hosting/places'}>
          <FaArrowLeft className="w-6 h-6 mb-2" />
        </Link>
        <h1 className="mb-3 text-3xl font-medium">Place editor</h1>
      </div>
      <ul className="flex flex-row gap-6 h-full py-6 px-[5%] overflow-x-scroll md:overflow-y-scroll md:overflow-x-auto  *:w-[250px] *:shrink-0  md:flex-col md:py-10 md:*:w-full">
        {!isCompleted && (
          <li>
            <Box>
              <div className="flex items-center gap-2">
                <div className="font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2  rounded-full bg-orange-500 "></div>
                    <div> Complete Required steps</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Finish these final tasks to publish your listing and start
                getting booked.
              </p>
            </Box>
          </li>
        )}
        <li>
          <Link to={'status'}>
            <Box>
              <div className="flex justify-between font-medium ">
                <div className="font-medium">Status</div>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      is_listed ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                  <span> {is_listed ? 'Listed' : 'Unlisted'}</span>
                </div>
              </div>
            </Box>
          </Link>
        </li>
        <li>
          <Link to={'title'}>
            <Box>
              <div className="flex items-center gap-2">
                <div className="font-medium mb-1">Title</div>
              </div>
              <div>{title}</div>
            </Box>
          </Link>
        </li>
        <li>
          <Link to={'summary'}>
            <Box>
              <div className="font-medium mb-1">Summary</div>
              {summary && (
                <div>
                  {summary.length > 100
                    ? summary.slice(0, 100) + ' ...'
                    : summary}
                </div>
              )}
              {!summary && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2  rounded-full bg-orange-500 "></div>
                  <div className="text-gray-600">No summary added</div>
                </div>
              )}
            </Box>
          </Link>
        </li>
        <li>
          <Link to={'amenities'}>
            <Box>
              <div className="font-medium  mb-2">Amenities</div>
              <ul className="flex flex-col gap-1">
                {amenities?.slice(0, 2).map((amenity) => (
                  <li key={amenity.id} className="flex items-center gap-3">
                    {getAmenity(amenity.id).amenityName}
                  </li>
                ))}
              </ul>
              {amenities?.length === 0 && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2  rounded-full bg-orange-500 "></div>
                  <div className="text-gray-600">No amenities added</div>
                </div>
              )}
              {amenities?.length > 2 && (
                <div className=" text-sm mt-3 text-gray-600">
                  +{amenities.length - 2} more
                </div>
              )}
            </Box>
          </Link>
        </li>
        <li>
          <Link to={'type'}>
            <Box>
              <div className="font-medium mb-1">Type</div>
              {place_type_id && (
                <div className="flex items-center gap-2 text-gray-600">
                  {getPlaceType(place_type_id).typeName}
                </div>
              )}
              {!place_type_id && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2  rounded-full bg-orange-500 "></div>
                  <div className="text-gray-600">No type added</div>
                </div>
              )}
            </Box>
          </Link>
        </li>
        <li>
          <Link to={'category'}>
            <Box>
              <div className="font-medium  mb-1">Category</div>
              {category_id && (
                <div className=" text-gray-600">
                  <span>{getPlaceCategory(category_id).categoryName}</span>
                </div>
              )}
              {!category_id && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2  rounded-full bg-orange-500 "></div>
                  <div className="text-gray-600">No category added</div>
                </div>
              )}
            </Box>
          </Link>
        </li>
        <li>
          <Link to={'photos'}>
            <Box>
              <div className="flex">
                <div className="font-medium mb-2">Photos</div>
              </div>
              {place_images.length < 5 && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2  rounded-full bg-orange-500 "></div>
                  <div className="text-gray-600">add at least 5 photos</div>
                </div>
              )}

              {place_images.length >= 5 && (
                <div>
                  <img
                    src={place_images[0].image_url}
                    loading="lazy"
                    className="w-10 h-10 rounded-md -rotate-6 -mr-2"
                  />
                  <div className=" text-sm mt-3 text-gray-600">+4 more</div>
                </div>
              )}
            </Box>
          </Link>
        </li>
        <li>
          <Link to={'location'}>
            <Box>
              <div className="font-medium  mb-1">Loaction</div>
              {city && (
                <div className="text-gray-600">
                  <div>{address}</div>
                  <div>
                    {city}, {country}
                  </div>
                </div>
              )}
              {!city && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2  rounded-full bg-orange-500 "></div>
                  <div className="text-gray-600">No location added</div>
                </div>
              )}
            </Box>
          </Link>
        </li>
        <li className="pr-2 md:pr-0">
          <Link to={'plan'}>
            <Box>
              <div className="font-medium  mb-2">Plan</div>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <span>{`${num_beds} beds`}</span>
                <span>{`${num_rooms} rooms`}</span>
                <span>{`${num_bathrooms} bathrooms`}</span>
                <span>{`${max_guests} guests`}</span>
              </div>
            </Box>
          </Link>
        </li>
      </ul>
    </div>
  );
}
