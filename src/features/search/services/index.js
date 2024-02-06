import supabase from '../../../services/supabase';

export async function searchCities(search) {
  if (!search) return null;
  const { data, error } = await supabase.rpc('search_cities', {
    search_term: search,
  });

  if (error) throw new Error(error.message);

  return data;
}
