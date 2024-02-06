import Dropzone from '../../../components/Dropzone';
import useAddImageToPlace from './hooks/useAddImageToPlace';
import useRemoveImageFromPlace from './hooks/useRemoveImageFromPlace';
import { IoIosClose } from 'react-icons/io';
import useEditedPlace from './hooks/useEditedPlace';

export default function EditPlaceImages() {
  const { editedPlace } = useEditedPlace();
  const { addImageToPlace, isAddingImage } = useAddImageToPlace();
  const { removeImageFromPlace, isRemovingImage } = useRemoveImageFromPlace();

  const images = editedPlace.place_images;

  const length = images.length <= 5 ? 5 : images.length;

  const handleAddImage = (image) => {
    addImageToPlace(image);
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">Choose at least 5 images</h1>
      <div className="grid grid-cols-2 gap-2 [&>*:first-child]:col-span-2 ">
        {Array.from({ length }, (_, indx) => {
          const isCurrentImageUploading =
            isAddingImage && indx === images.length;

          const isCurrentImageRemoving =
            isRemovingImage && indx === images.length;
          console.log(isCurrentImageRemoving);
          return (
            <div key={indx} className="relative w-full aspect-video">
              {!isCurrentImageUploading && images[indx] && (
                <>
                  <img
                    className="w-full h-full bg-cover"
                    src={images[indx].image_url}
                  />
                  <button
                    onClick={() => removeImageFromPlace(images[indx].id)}
                    className="absolute top-2 right-2 flex justify-center items-center rounded-full bg-red-400 w-6 h-6 text-white"
                  >
                    <IoIosClose className="w-4 h-4" />
                  </button>
                </>
              )}

              {!isCurrentImageUploading && !images[indx] && (
                <Dropzone onChange={handleAddImage} />
              )}

              {isCurrentImageUploading && (
                <div className="flex justify-center items-center w-full h-full aspect-video bg-gray-200">
                  uploading...
                </div>
              )}

              {isCurrentImageRemoving && (
                <div className="flex justify-center items-center w-full h-full aspect-video bg-black opacity-50">
                  uploading...
                </div>
              )}
            </div>
          );
        })}
        {images.length >= 5 && !isAddingImage && (
          <Dropzone onChange={handleAddImage} />
        )}
        {images.length >= 5 && isAddingImage && (
          <div className="flex justify-center items-center w-full h-full aspect-video bg-gray-200">
            uploading...
          </div>
        )}
      </div>
    </div>
  );
}
