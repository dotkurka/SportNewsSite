import 'styles/LockScrollbar.scss';

export const lockScrollbar = () => {
  if (typeof window !== 'undefined' && window.document) {
    document.body.classList.add('lock-scrollbar');
  }
};

export const unlockScrollbar = () => {
  document.body.classList.remove('lock-scrollbar');
};
