import { createContext } from 'react';

const ArticleSubmitContext = createContext<React.RefObject<HTMLButtonElement> | null>(null);

export default ArticleSubmitContext;
