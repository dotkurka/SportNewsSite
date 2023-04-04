import Photo from 'assets/images/main-photo-article.png';
import { MainArticleCarousel } from 'components';

const sliderData = [
  {
    img: Photo,
    title: {
      published: 'Published / 20.09.2020',
      head: 'London Games return in 2019',
      description:
        'Register to receive the latest news on ticket sales for the four NFL London Games in 2019!',
    },
  },
  {
    img: 'https://digitalhub.fifa.com/transform/2d264787-f3b5-4533-9142-cb0df6ca0142/Brazil-v-Serbia-Group-G-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:868,width:1536&quality=100',
    title: {
      published: 'Published / 26.07.2099',
      head: 'American Games come back in 2019',
      description:
        'Register to receive the latest news on ticket sales for the four NFL London Games in 2019!',
    },
  },
  {
    img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/20/242401.jpg',
    title: {
      published: 'Published / 10.08.2029',
      head: 'Monya its patsyuk',
      description:
        'Register to receive the latest news on ticket sales for the four NFL London Games in 2019!',
    },
  },
];

const Home = () => {
  return (
    <div>
      <MainArticleCarousel sliderData={sliderData} />
    </div>
  );
};

export default Home;
