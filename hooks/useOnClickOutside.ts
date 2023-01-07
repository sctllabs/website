import { RefObject, useEffect } from 'react';

const useOnClickOutside = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: RefObject<any>,
  handler: (e: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      event.stopPropagation();

      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mouseup', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mouseup', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
