import supabase from '../../../../services/supabase';

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
