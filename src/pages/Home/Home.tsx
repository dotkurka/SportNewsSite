import { HomeComponent } from 'components';
import { homeMockData } from 'config/ArticleData/articleData';

// replace mock data
// const { data: homeData } = useGetHomeQuery();
const data = homeMockData;

const Home = () => {
  return <HomeComponent data={data} />;
};

export default Home;
