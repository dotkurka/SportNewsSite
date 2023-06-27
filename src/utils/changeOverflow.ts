export const changeOverflow = () => {
  if (typeof window !== 'undefined' && window.document) {
    document.body.style.overflow = 'hidden';
    document.documentElement.scrollTop = 0;
  }
};

export const changeBackOverflow = () => {
  document.body.style.overflow = 'unset';
};
