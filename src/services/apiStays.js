import supabase from './supabase';
import { formatDate } from '../utils/helper';
import { addDays } from 'date-fns';

// 1 = upcoming , 2 = arriving , 3 = current

const query = supabase
  .from('booking')
  .select(
    'id , place(title) , user(first_name,last_name) , checkin_date , checkout_date'
  );

export async function getUpcomingStays() {
  const today = formatDate(new Date(), 'yyyy-MM-dd');
  const { data, error } = await query.gte('checkin_date', today);

  if (error) throw new Error(error.message);
  return data;
}

// arrive today or tomorrow
export async function getArrivingStays() {
  const today = formatDate(new Date(), 'yyyy-MM-dd');
  const tomorrow = formatDate(addDays(new Date(), 1), 'yyyy-MM-dd');

  const { data, error } = await query
    .lte('checkin_date', tomorrow)
    .gte('checkin_date', today)
    .order('checkin_date', { ascending: true });

  if (error) throw new Error(error.message);

  return data;
}

// current hosting
export async function getCurrentStays() {
  const { data, error } = await query.eq('status', 2);
  if (error) throw new Error(error.message);

  return data;
}

// leave today or tomorrow
export async function getLeavingStays() {
  const today = formatDate(new Date(), 'yyyy-MM-dd');
  const tomorrow = formatDate(addDays(new Date(), 1), 'yyyy-MM-dd');

  const { data, error } = await query
    .lte('checkout_date', tomorrow)
    .gte('checkout_date', today)
    .order('checkout_date', { ascending: true });

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
