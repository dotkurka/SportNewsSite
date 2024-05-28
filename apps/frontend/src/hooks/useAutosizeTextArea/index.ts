import { useEffect, useRef } from 'react';

const useAutosizeTextArea = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textArea = textAreaRef.current;

  useEffect(() => {
    if (textArea) {
      textArea.addEventListener('input', () => {
        textArea.style.height = '0px';
        const { scrollHeight } = textArea;
        textArea.style.height = `${scrollHeight + 1}px`;
      });

      if (textArea.textLength === 0) {
        textArea.style.height = 'revert-layer';
      }
    }
  }, [textAreaRef, textArea?.style.height]);

  return textAreaRef;
};

export default useAutosizeTextArea;
