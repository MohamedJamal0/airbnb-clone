import { useState } from 'react';

export default function useToggle(init = false) {
  const [toggle, setToggle] = useState(init);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return { toggle, handleToggle };
}
