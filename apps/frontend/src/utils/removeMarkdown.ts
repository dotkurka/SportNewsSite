/* eslint-disable prefer-named-capture-group -- // */
/* eslint-disable no-useless-escape -- // */
const removeMarkdown = (text: string) => {
  const withoutMarkdown = text
    // Remove images
    .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
    // Remove inline links
    .replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g, '$1')
    // Remove blockquotes
    .replace(/^(\n)?\s{0,3}>\s?/gm, '$1')
    // Remove atx-style headers
    .replace(/^(\n)?\s{0,}#{1,6}\s*( (.+))? +#+$|^(\n)?\s{0,}#{1,6}\s*( (.+))?$/gm, '$1$3$4$6')
    // Remove * emphasis
    .replace(/([\*]+)(\S)(.*?\S)??\1/g, '$2$3')
    // Remove _ emphasis. Unlike *, _ emphasis gets rendered only if
    .replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g, '$1$3$4$5')
    // Replace strike through
    .replace(/~(.*?)~/g, '$1')
    // Replace underline
    .replace(/[<>]/g, '');

  const withoutParagraphs = withoutMarkdown.replace(/\n\n/g, ' ').replace(/\n/g, '');
  const withoutSpaces = withoutParagraphs.trim();

  return withoutSpaces;
};

export default removeMarkdown;
