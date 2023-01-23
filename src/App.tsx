import LangSelector from './components/LangSelector/LangSelector';

import './styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <LangSelector langueages={['dsd', 'sdsd']} initialLang='Eu' />
    </div>
  );
};

export default App;
