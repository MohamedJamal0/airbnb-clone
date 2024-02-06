import { getPlaces } from '../services';
import { useInfiniteQuery } from '@tanstack/react-query';
import useSearchParamsFromUrl from '../../../hooks/useSearchParamsFromUrl';

export default function usePlaces() {
  const filterParams = useSearchParamsFromUrl();

  console.log('filterParams', filterParams);

  const { data, fetchNextPage, isLoading, isFetching } = useInfiniteQuery({
    queryFn: ({ pageParam }) => getPlaces({ ...filterParams, page: pageParam }),
    queryKey: ['places', filterParams],
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 20) return undefined;
      return pages.length + 1;
    },
  });

  const places = data?.pages.flatMap((page) => page);

  return { places, fetchNextPage, isLoading, isFetching };
}
