export interface ILangSelector {
  langueages: Langue[];
  initialLang: Langue;
}

export enum Langue {
  en = 'EN',
  fr = 'FR',
  ua = 'UA',
  de = 'DE',
}
