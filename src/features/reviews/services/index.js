import supabase from '../../../services/supabase';

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

export async function updateReview({ rating, content, reviewId }) {
  const { data, error } = await supabase
    .from('review')
    .update({ rating, content })
    .eq('id', reviewId);

  if (error) throw new Error(error.message);

  return data;
}

export async function createReview(review) {
  const { data, error } = await supabase
    .from('review')
    .insert({
      content: review.content,
      rating: review.rating,
      place_id: review.placeId,
      booking_id: review.bookingId,
    })
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function getReview({ bookingId, userId }) {
  console.log(bookingId, userId);
  const { data, error } = await supabase
    .from('review')
    .select('id , content , rating')
    .eq('booking_id', bookingId)
    .eq('user_id', userId)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
