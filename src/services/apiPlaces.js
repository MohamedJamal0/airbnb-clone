import supabase from './supabase';
import { uploadImage } from './apiCloudinary';

export async function getPlaces(filterParams) {
  const {
    city,
    startDate,
    endDate,
    maxPrice,
    minPrice,
    numAdults,
    numChildren,
    numInfants,
    type,
    category,
    amenities,
    page,
  } = filterParams;

  const { data, error } = await supabase.rpc('get_places', {
    city_name: city,
    start_date: startDate,
    end_date: endDate,
    max_price: maxPrice,
    min_price: minPrice,
    type,
    category,
    amenities,
    page_number: page,
    num_guests: numAdults + numChildren + numInfants,
    num_nights: null,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getPlaceInfo(placeId) {
  const { data, error } = await supabase
    .rpc('get_place_info', {
      place_id_param: placeId,
    })
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function getEditedPlace(placeId) {
  const { data, error } = await supabase
    .from('place')
    .select('* , place_image(id,image_url))')
    .eq('id', placeId)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function createPlace(newPlace) {
  // create place
  const { data, error } = await supabase
    .from('place')
    .insert({ ...newPlace })
    .select(
      'id , title , address , city ,place_images: place_image(image_url) , is_listed'
    )
    .single();

  if (error) throw new Error(error.message);

  return data;
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

export async function getHostPlaces(hostId) {
  const { data, error } = await supabase
    .from('place')
    .select(
      'id , title , address , city , place_images:place_image(image_url) , is_listed'
    )
    .eq('host_id', hostId);

  if (error) throw new Error(error.message);

  return data;
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
