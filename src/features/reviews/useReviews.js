import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPlaceReviews } from '../../services/apiReviews';
import { useParams } from 'react-router-dom';

export default function useReviews() {
  const { placeId } = useParams();
  const [sortBy, setSortBy] = useState('newest');

  const { data, isLoading, isPending, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['reviews', placeId, sortBy],
      queryFn: ({ pageParam: page }) =>
        getPlaceReviews({
          placeId: 1,
          sortBy,
          page,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 25) return undefined;
        return pages.length + 1;
      },
    });

  const reviews = data?.pages.flatMap((page) => page);
  return {
    reviews,
    isLoading,
    isFetching,
    isPending,
    fetchNextPage,
    hasNextPage,
    setSortBy,
    sortBy,
  };
}
