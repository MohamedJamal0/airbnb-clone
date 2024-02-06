import supabase from '../../../../services/supabase';

export async function getUpcomingStays() {
  const { data, error } = await supabase.rpc('get_upcoming_stays');
  if (error)
    throw new Error(error.message).order('checkin_date', { ascending: false });

  return data;
}

export async function getArrivingStays() {
  const { data, error } = await supabase.rpc('get_arriving_stays');

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentStays() {
  const { data, error } = await supabase.rpc('get_current_stays');
  if (error) throw new Error(error.message);

  return data;
}

export async function getLeavingStays() {
  const { data, error } = await supabase.rpc('get_leaving_stays');

  if (error) throw new Error(error.message);

  return data;
}

export async function getStaysCounts(hostId) {
  const { data, error } = await supabase
    .rpc('get_stay_counts_for_host', {
      hostid: hostId,
    })
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function checkin(bookingId) {
  const { error } = await supabase
    .from('booking')
    .update({ status: 2 })
    .eq('id', bookingId);

  if (error) throw new Error(error.message);
}
export async function checkout(bookingId) {
  const { error } = await supabase
    .from('booking')
    .update({ status: 3 })
    .eq('id', bookingId);

  if (error) throw new Error(error.message);
}
