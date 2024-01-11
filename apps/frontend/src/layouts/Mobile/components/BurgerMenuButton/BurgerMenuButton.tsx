import './BurgerMenuButton.scss';

interface IBurgerBtn {
  show: boolean;
  onClick: () => void;
}

const BurgerMenuButton = ({ show, onClick }: IBurgerBtn) => {
  return (
    <button className={`burger-btn ${show ? 'open' : ''}`} onClick={onClick}>
      <span className='icon' />
    </button>
  );
};

export default BurgerMenuButton;
