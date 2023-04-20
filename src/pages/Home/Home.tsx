import Article from 'components/Article/Article';

const data = {
  img: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
  alt: '',
  category: 'NBA',
  description: 'Lorem ipsum dolor sit amet, consectetur',
  path: '/blalalalal',
};
const Home = () => {
  return (
    <div>
      <Article articleData={data} />
    </div>
  );
};

export default Home;
