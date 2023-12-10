/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Modal } from 'components';

const fillMidal = {
  title: 'EEROROOFJF',
  message:
    'sajkhd asdh shajkfh asf aksfhasfh kasjhfjk askjfhkasjh fk sakfh akshfkjhaskjhfgjk asfa sfkjhasfkj asjkhf kjash fhafsk j',
};

const handleSubmit = () => {
  console.log('okey');
};

const Test = () => {
  const [show, setShow] = useState(false);
  const param = useParams();
  console.log(param);

  return (
    <div>
      <button onClick={() => setShow(true)}>show</button>
      <Modal
        customText={fillMidal}
        buttonConfirmText='Cool'
        onClick={handleSubmit}
        show={show}
        handleShow={setShow}
      />
      <Link to='new'>Kink</Link>
    </div>
  );
};

export default Test;
