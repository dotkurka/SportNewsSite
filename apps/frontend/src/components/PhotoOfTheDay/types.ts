export interface IPhotoDayData {
  img: string;
  alt: string;
  title: string;
  description: string;
  author: string;
}

export interface IPhotoDay {
  photoDayData: IPhotoDayData;
  className?: string;
}
