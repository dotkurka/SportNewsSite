import { useEffect, useRef } from 'react';

const useClickOutside = (func: () => void) => {
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (!domNode.current?.contains(e.target as HTMLDivElement)) {
        func();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return domNode;
};

export default useClickOutside;
