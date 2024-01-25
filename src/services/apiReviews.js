import supabase from './supabase';

export async function getPlaceReviews({ placeId, sortBy, page }) {
  let query = supabase
    .from('review')
    .select(
      'id , content, rating , created_at , user(first_name , last_name , avatar_url)'
    )
    .eq('place_id', placeId);

  if (sortBy === 'newest') {
    query = query.order('created_at', { ascending: false });
  } else if (sortBy === 'highest') {
    query = query.order('created_at', { ascending: true });
  }

  const from = (page - 1) * 25;
  const to = from + 25 - 1;
  query = query.range(from, to);

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
}
