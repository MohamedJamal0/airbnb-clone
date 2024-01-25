import React from 'react';

export default function Box({ className, children }) {
  return (
    <div
      className={`p-6 w-full h-full rounded-md border shadow-md duration-200  bg-white hover:bg-slate-100  ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
}
