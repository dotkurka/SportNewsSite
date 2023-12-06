export const setOverflowHidden = () => {
  if (typeof window !== 'undefined' && window.document) {
    document.body.style.overflow = 'hidden';
    document.documentElement.scrollTop = 0;
  }
};

export const unsetOverflow = () => {
  document.body.style.overflow = 'unset';
};
