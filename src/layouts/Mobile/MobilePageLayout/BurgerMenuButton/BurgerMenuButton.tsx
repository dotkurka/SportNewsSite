import './BurgerMenuButton.scss';

interface IBurgerBtn {
  show: boolean;
  onClick: () => void;
}

const BurgerMenuButton = ({ show, onClick }: IBurgerBtn) => {
  return (
    <button onClick={onClick} className={`burger-btn ${show ? 'open' : ''}`}>
      <span className='icon' />
    </button>
  );
};

export default BurgerMenuButton;
