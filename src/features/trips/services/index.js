import supabase from '../../../services/supabase';

export async function getUserTrips() {
  const { data, error } = await supabase
    .rpc('get_user_trips')
    .select('*')
    .order('checkin_date', { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}
