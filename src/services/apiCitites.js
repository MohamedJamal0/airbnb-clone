import axios from 'axios';
import supabase from './supabase';

export async function getCitybyLatLong({ lat, long }) {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?&latitude=${lat}&longitude=${long}`;

  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}


