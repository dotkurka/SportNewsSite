export interface ILangSelector {
  lang: Langue[];
  initialLang: Langue;
}

export enum Langue {
  en = 'EN',
  fr = 'FR',
  ua = 'UA',
  de = 'DE',
}
