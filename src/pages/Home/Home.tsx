import ArticleCollection from 'components/ArticleCollection/ArticleCollection';

const data = [
  {
    img: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    alt: '',
    title: 'Raiders release',
    description: 'After a five-year stint with the ',
    path: '/blalalalal',
  },
  {
    img: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    alt: '',
    title: 'Raiders release',
    description: 'After a five-year stint with the Oakland Raiders',
    path: '/blalalalal',
  },
  {
    img: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    alt: '',
    title: 'Raiders release',
    description: 'After a five-year stint with the Oakland Raiders',
    path: '/blalalalal',
  },
];

const Home = () => {
  return (
    <div>
      <ArticleCollection collection={data} />
    </div>
  );
};

export default Home;
