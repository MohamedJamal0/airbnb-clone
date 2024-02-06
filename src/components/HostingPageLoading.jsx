import React from 'react'
import Loading from './ui/Loading';

export default function HostingPageLoading() {
  return (
    <div className="flex  items-center justify-center h-[calc(100vh-80px)]">
      <Loading />
    </div>
  );
}
