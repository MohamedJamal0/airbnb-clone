import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBookedPlaceDetails } from '../services/index';

export default function useGetBookedPlaceDetails({ startDate, endDate }) {
  const { placeId } = useParams();

  const { data: bookedPlaceDetails, isLoading } = useQuery({
    queryKey: ['bookedPlaceDetails', placeId, startDate, endDate],
    queryFn: () => getBookedPlaceDetails({ placeId, startDate, endDate }),
  });

  return { bookedPlaceDetails, isLoading };
}
