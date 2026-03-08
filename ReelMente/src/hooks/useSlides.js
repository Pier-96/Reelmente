import { useState, useEffect } from 'react';

const STORAGE_KEY = 'reelmente_slides';

export function useSlides() {
  const [slidesData, setSlidesData] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (slidesData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slidesData));
    }
  }, [slidesData]);

  const saveSlides = (data) => {
    setSlidesData(data);
  };

  const clearSlides = () => {
    setSlidesData(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { slidesData, saveSlides, clearSlides };
}
