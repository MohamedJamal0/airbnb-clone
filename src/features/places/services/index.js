import supabase from '../../../services/supabase';
import { getDifferenceInDays } from '../../../utils/helper';

export async function getPlaces(filterParams) {
  const numNights =
    getDifferenceInDays(filterParams.startDate, filterParams.endDate) || null;

  const totalGuests =
    filterParams.numAdults + filterParams.numChildren + filterParams.numInfants;

  const { data, error } = await supabase.rpc('get_filtered_places', {
    city_name: filterParams.city,
    start_date: filterParams.startDate,
    end_date: filterParams.endDate,
    max_price: filterParams.maxPrice,
    min_price: filterParams.minPrice,
    type: filterParams.type,
    category: filterParams.category,
    amenities: filterParams.amenities,
    page_number: filterParams.page,
    num_guests: totalGuests,
    num_nights: numNights,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getPlaceInfo(placeId) {
  const { data, error } = await supabase
    .rpc('get_place_details', {
      place_id_param: placeId,
    })
    .single();

  if (error) throw new Error(error.message);
  return data;
}
