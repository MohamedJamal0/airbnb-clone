import supabase from '../../../../services/supabase';
import { uploadImage } from '../../../../services/apiCloudinary';

export async function getEditedPlace(placeId) {
  const { data, error } = await supabase
    .from('place')
    .select(
      '* ,place_images:place_image(id,image_url), amenities:place_amenity(id:amenity_id)'
    )
    .eq('id', placeId)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getHostPlaces(hostId) {
  const { data, error } = await supabase
    .rpc('get_host_places', { hostid: hostId })
    .order('id', { ascending: false });
  if (error) throw new Error(error.message);

  return data;
}

export async function createPlace({ place, hostId }) {
  const { title, numBeds, numGuests, numBaths, numBedrooms } = place;
  const { error } = await supabase.from('place').insert({
    title,
    num_beds: numBeds,
    max_guests: numGuests,
    num_bathrooms: numBaths,
    num_bedrooms: numBedrooms,
    host_id: hostId,
  });

  if (error) throw new Error(error.message);
}

export async function updatePlace(data, id) {
  const { error } = await supabase
    .from('place')
    .update({ ...data })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);
}

export async function deletePlace(id) {
  const { error } = await supabase.from('place').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

export async function addImageToPlace(placeId, image) {
  try {
    const image_url = await uploadImage(image);

    const { data, error } = await supabase
      .from('place_image')
      .insert({ place_id: placeId, image_url })
      .select('id , image_url')
      .single();

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    throw new Error('Error uploading image');
  }
}

export async function removeImageFromPlace(imageId) {
  const { error } = await supabase
    .from('place_image')
    .delete()
    .eq('id', imageId);
  if (error) throw new Error(error.message);
}

export async function addAmenityToPlace(placeId, amenityId) {
  const { error } = await supabase
    .from('place_amenity')
    .insert({ place_id: +placeId, amenity_id: +amenityId });
  if (error) throw new Error(error.message);
}

export async function removeAmenityFromPlace(placeId, amenityId) {
  const { error } = await supabase
    .from('place_amenity')
    .delete()
    .eq('place_id', +placeId)
    .eq('amenity_id', +amenityId);
  if (error) throw new Error(error.message);
}
