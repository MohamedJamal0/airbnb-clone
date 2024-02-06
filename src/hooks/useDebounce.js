import { useState, useEffect } from 'react';

function useDebounce(callback, delay) {
  // State and setter for debounce timer
  const [timer, setTimer] = useState(null);

  // Debounced callback function
  function debouncedCallback(...args) {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        callback(...args);
      }, delay)
    );
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return {debouncedCallback};
}

export default useDebounce;
