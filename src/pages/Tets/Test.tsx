import { Select } from 'components';
import { SelectVariant } from 'components/Select/types';

const Test = () => {
  return (
    <div>
      <Select
        label='Sort by:'
        variant={SelectVariant.Text}
        options={['Most Recent', 'Most popular', 'Oldest', 'New']}
      />
    </div>
  );
};

export default Test;
