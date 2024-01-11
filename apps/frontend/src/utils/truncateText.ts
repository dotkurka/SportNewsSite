const truncateText = (inputText: string, maxLength: number) => {
  if (!inputText || inputText.length <= maxLength) {
    return inputText;
  }

  const truncatedText = inputText.substring(0, maxLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(' ');
  const finalText =
    lastSpaceIndex !== -1 ? truncatedText.substring(0, lastSpaceIndex) : truncatedText;

  return finalText;
};

export default truncateText;
