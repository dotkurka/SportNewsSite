import PhotoOfTheDay from 'components/PhotoOfTheDay/PhotoOfTheDay';

const data = {
  img: 'https://familytimes.com.ua/sites/default/files/styles/article_detail/public/2019-12/sport.jpg?itok=LhFQ6CEF',
  alt: '',
  title: 'Defending The Throne',
  description:
    'Los Angeles Lakes guard Derek Fisher, right, is pressured by the Denver Nuggets Nene during th efirst quarter of NBA exhibition action on Oct 16',
  author: 'Photo bu MTDD',
};

const Home = () => {
  return (
    <div style={{ maxWidth: '813px', width: '100%' }}>
      <PhotoOfTheDay photoDayData={data} />
    </div>
  );
};

export default Home;
