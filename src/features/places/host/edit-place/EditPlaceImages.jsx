import Dropzone from '../../../../components/Dropzone';
import useAddImageToPlace from './useAddImageToPlace';
import useRemoveImageFromPlace from './useRemoveImageFromPlace';
import { IoIosClose } from 'react-icons/io';
import useEditedPlace from './useEditedPlace';

export default function EditPlaceImages() {
  const { editedPlace } = useEditedPlace();
  const { addImageToPlace, isLoading } = useAddImageToPlace();
  const { removeImageFromPlace } = useRemoveImageFromPlace();

  const images = editedPlace.place_image;

  const length = images.length <= 5 ? 5 : images.length;

  const handleAddImage = (image) => {
    addImageToPlace(image);
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">Choose at least 5 images</h1>
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length }, (_, i) => {
          const isImageUploading = isLoading && i === images.length;
          console.log(isImageUploading, i);
          return (
            <div
              key={i}
              className={` relative w-full aspect-video  ${
                i === 0 ? 'col-span-2' : ''
              }`}
            >
              {!isImageUploading && images[i] && (
                <>
                  <img
                    className="w-full h-full bg-cover"
                    src={images[i].image_url}
                  />
                  <button
                    onClick={() => removeImageFromPlace(images[i].id)}
                    className="absolute top-2 right-2 flex justify-center items-center rounded-full bg-red-400 w-6 h-6 text-white"
                  >
                    <IoIosClose className="w-4 h-4" />
                  </button>
                </>
              )}

              {!isImageUploading && !images[i] && (
                <Dropzone onChange={handleAddImage} />
              )}

              {isImageUploading && (
                <div className="flex justify-center items-center w-full h-full bg-gray-200">
                  uploading...
                </div>
              )}
            </div>
          );
        })}
        <Dropzone onChange={handleAddImage} />
      </div>
    </div>
  );
}
