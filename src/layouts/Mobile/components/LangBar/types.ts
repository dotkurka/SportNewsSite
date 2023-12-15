import type { Langue } from 'components/LangSelector/enums';

export interface ILangSelector {
  lang: Langue[];
  initialLang: Langue;
}
