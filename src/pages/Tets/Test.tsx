/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';

import { Select } from 'components';

import type { IOptions } from 'components/Select/types';
import type { IConferenceData } from 'features/category/types';

const fillMidal = {
  title: 'EEROROOFJF',
  message:
    'sajkhd asdh shajkfh asf aksfhasfh kasjhfjk askjfhkasjh fk sakfh akshfkjhaskjhfgjk asfa sfkjhasfkj asjkhf kjash fhafsk j',
};

const handleSubmit = () => {
  console.log('okey');
};
const newopo: IConferenceData[] = [
  {
    id: '9348492834802398',
    title: 'Eastern',
    path: '/NBA/Eastern',
    team: [
      {
        id: '9922384834348098',
        title: 'New York Knicks',
        path: '/NBA/New+York+Knicks',
      },
      {
        id: '9343380249849288',
        title: 'Boston Celtics',
        path: '/NBA/Boston+Celtics',
      },
    ],
  },
  {
    id: '9343024288984389',
    title: 'Western',
    path: '/NBA/Western',
    team: [
      {
        id: '9343489849238028',
        title: 'Detroit Pistons',
        path: '/NBA/Detroit+Pistons',
      },
      {
        id: '9498433843029288',
        title: 'Indiana Pacers',
        path: '/NBA/Indiana+Pacers',
      },
    ],
  },
];

const newOption: IOptions<IConferenceData> = {
  primaryKey: 'title',
  options: newopo,
};

const Test = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Select onChange={(item) => console.log(item)} options={newOption} />
    </div>
  );
};

export default Test;
