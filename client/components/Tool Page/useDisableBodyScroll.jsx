import { useEffect } from 'react';

// if open = true, set the overflow to hidden else unset.
export const useDisableBodyScroll = (open) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);
};