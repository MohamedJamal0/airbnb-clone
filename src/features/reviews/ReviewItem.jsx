import React from 'react';
import Stars from '../../components/Stars';

export default function ReviewItem({ review }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        {review.user.avatar_url ? (
          <img className="w-8 h-8 rounded-full" src={review.avatar_url} />
        ) : (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
            {review.user.first_name[0].toUpperCase()}
          </div>
        )}
        <span className="font-medium">{`${review.user.first_name} ${review.user.last_name}`}</span>
      </div>
      <div className="mt-2">
        <Stars stars={review.rating} />
      </div>
      <p className="mt-2">{review.content}</p>
    </div>
  );
}
