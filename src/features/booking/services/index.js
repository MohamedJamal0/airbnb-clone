import supabase from '../../../services/supabase';

export async function checkAvailability({ placeId, startDate, endDate }) {
  if (!startDate || !endDate || startDate === endDate) return false;

  const { data } = await supabase.rpc('is_place_available', {
    place_id: placeId,
    start_date: startDate,
    end_date: endDate,
  });

  return data;
}

export async function getPlaceBookedDates(placeId) {
  const { data, error } = await supabase
    .from('booking')
    .select('startDate:checkin_date,endDate:checkout_date')
    .eq('place_id', placeId);

  if (error) throw new Error(error.message);

  return data;
}

export async function getBookedPlaceDetails({ placeId, startDate, endDate }) {
  console.log({ placeId, startDate, endDate });
  const { data, error } = await supabase
    .rpc('get_booked_place_details', {
      place_id_param: placeId,
      checkin_date_param: startDate,
      checkout_date_param: endDate,
    })
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function createBooking(booking) {
  const { error } = await supabase.from('booking').insert({
    place_id: booking.placeId,
    checkin_date: booking.startDate,
    checkout_date: booking.endDate,
    num_adults: booking.numAdults,
    num_children: booking.numChildren,
    num_infants: booking.numInfants,
    total_amount: booking.totalAmount,
    user_id: booking.userId,
  });

  if (error) throw new Error(error.message);
}
