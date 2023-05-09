interface ISliderData {
  img: string;
  alt: string;
  title: {
    published: string;
    head: string;
    description: string;
  };
}

export interface IMainTitle {
  sliderData: ISliderData[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export interface IMainCarousel {
  sliderData: ISliderData[];
  className?: string;
}
