import { FaCampground, FaCubes } from 'react-icons/fa';
import {
  FaTv,
  FaWifi,
  FaSnowflake,
  FaHotTub,
  FaTshirt,
  FaParking,
  FaSuitcase,
  FaUtensils,
  FaBeer,
  FaFire,
} from 'react-icons/fa';

import { LuHotel } from 'react-icons/lu';
import { TfiHome } from 'react-icons/tfi';
import { PiMountainsLight } from 'react-icons/pi';
import { FaRegBuilding } from 'react-icons/fa';
import { PiHouseLight } from 'react-icons/pi';
import { IoBedOutline } from 'react-icons/io5';
import { LuTrees } from 'react-icons/lu';
import { GiWoodCabin } from 'react-icons/gi';

export const amenities = [
  { id: 1, amenityName: 'TV', Icon: FaTv },
  { id: 2, amenityName: 'Wi-Fi', Icon: FaWifi },
  { id: 3, amenityName: 'Kitchen', Icon: FaUtensils },
  {
    id: 4,
    amenityName: 'Air Conditioning',
    Icon: FaSnowflake,
  },
  { id: 5, amenityName: 'Hot Water', Icon: FaHotTub },
  { id: 6, amenityName: 'Dryer', Icon: FaTshirt },
  { id: 7, amenityName: 'Washer', Icon: FaBeer },
  { id: 8, amenityName: 'Heating', Icon: FaFire },
  { id: 9, amenityName: 'Parking', Icon: FaParking },
  {
    id: 10,
    amenityName: 'Essentials',
    Icon: FaSuitcase,
  },
];

export const getAmenity = (id) => {
  return amenities.find((amenity) => amenity.id === id);
};

export const placeTypes = [
  {
    id: 1,
    typeName: 'entire home',
  },
  {
    id: 2,
    typeName: 'room',
  },
  {
    id: 3,
    typeName: 'shared room',
  },
];

export const getPlaceType = (id) => {
  return placeTypes.find((type) => type.id === id);
};

export const categories = [
  { id: 1, categoryName: 'House', Icon: TfiHome },
  { id: 2, categoryName: 'Apartment', Icon: FaRegBuilding },
  { id: 3, categoryName: 'Hotel', Icon: LuHotel },
  { id: 4, categoryName: 'Tiny Home', Icon: PiHouseLight },
  { id: 6, categoryName: 'Farm', Icon: LuTrees },
  { id: 8, categoryName: 'Guesthouse', Icon: IoBedOutline },
  { id: 7, categoryName: 'Tent', Icon: FaCampground },
  { id: 5, categoryName: 'Container', Icon: FaCubes },
  { id: 9, categoryName: 'Cabin', Icon: GiWoodCabin },
  { id: 10, categoryName: 'Amazing Views', Icon: PiMountainsLight },
];

export const getPlaceCategory = (id) => {
  return categories.find((category) => category.id === id);
};
