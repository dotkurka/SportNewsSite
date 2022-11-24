interface ISelect {
  title: string;
}

const Select = ({ title }: ISelect) => {
  return (
    <div className='select'>
      <div className='select-btn'>{title}</div>
      <div className='select-contain'>
        <div className='select-option'>price</div>
        <div className='select-option'>year</div>
      </div>
    </div>
  );
};

export default Select;
