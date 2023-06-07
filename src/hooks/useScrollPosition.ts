import { useEffect, useState } from 'react';

export const calculateDrawerPostion = (
  screenWidth: number,
  offset: number
): number => {
  if (screenWidth >= 600 && screenWidth < 900) {
    return 124 - offset;
  }
  if (screenWidth < 600) {
    return 116 - offset;
  }
  return 64 - offset;
};

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
