import supabase from './supabase';

export async function getPlaceBookedDates(placeId) {
  const { data, error } = await supabase
    .from('booking')
    .select('startDate:checkin_date,endDate:checkout_date')
    .eq('place_id', placeId);

  if (error) throw new Error(error.message);

  return data;
}

export async function checkAvailability({ placeId, startDate, endDate }) {
  if (!startDate || !endDate || startDate === endDate) return false;

  const { data } = await supabase.rpc('is_place_available', {
    place_id: placeId,
    start_date: startDate,
    end_date: endDate,
  });

  return data;
}

export async function getHostBookings({ status, page, hostId }) {
  const query = supabase
    .from('booking')
    .select(
      'id , checkin_date , checkout_date , num_adults , num_children , num_infants , total_amount , place(title) , user(first_name,last_name), booking_status(status:status_name)'
    )
    .eq('place.host_id', hostId)
    .order('checkout_date', { ascending: false });

  if (status) {
    query.eq('status', status);
  }

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
}

export async function createBooking({
  placeId,
  startDate,
  endDate,
  numAdults,
  numChildren,
  numInfants,
  totalAmount,
}) {
  const { data, error } = await supabase.from('booking').insert({
    place_id: placeId,
    checkin_date: startDate,
    checkout_date: endDate,
    num_adults: numAdults,
    num_children: numChildren,
    num_infants: numInfants,
    total_amount: totalAmount,
  });

  if (error) throw new Error(error.message);

  return data;
}
