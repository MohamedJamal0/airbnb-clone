import axios from 'axios';

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'tiqd4xkm');

  try {
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/dfmcyikt4/image/upload',
      formData
    );

    return response.data.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
}

// eeahbdumdwv2h2cn9evu
