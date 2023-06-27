import { useState } from 'react';

import SurveyForm from 'components/Survey/SurveyForm';
import SurveyResult from 'components/Survey/SurveyResult';

import type { ISurvey } from 'components/Survey/types';
import './Survey.scss';

const Survey = ({ theme, question, values, date }: ISurvey) => {
  const [showResult, setShowResult] = useState(false);

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <div className='survey'>
      <div className='survey-head'>
        <p className='survey-head-title'>{theme}</p>
        <div className='survey-head-date'>
          {date.start} &#45; {date.end}
        </div>
      </div>
      <div className='survey-contain'>
        <p className='survey-contain-ques'>{question}</p>

        {showResult ? (
          <SurveyResult inputValues={values} />
        ) : (
          <SurveyForm showResult={handleShowResult} inputValues={values} />
        )}
      </div>
    </div>
  );
};

export default Survey;
