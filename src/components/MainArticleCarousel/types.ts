interface ISliderData {
  img: string;
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
}
