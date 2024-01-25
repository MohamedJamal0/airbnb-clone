import useEditedPlace from './useEditedPlace';

export default function useIneedName() {
  const { editedPlace } = useEditedPlace();

  const {title , summart , place_images , address , city } = editedPlace

  return <div>useIneedName</div>;
}
