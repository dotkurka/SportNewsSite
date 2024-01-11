import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/enums';

import type { ISurveyForm } from 'components/Survey/types';
import './Survey.scss';

const SurveyResult = ({ inputValues }: ISurveyForm) => {
  return (
    <>
      <div className='survey-contain-result'>
        {inputValues.map((item) => (
          <div className='survey-contain-result-item' key={item.value}>
            <div className='survey-contain-result-title'>
              <span>{item.answer}</span>
              <span>{item.interest}%</span>
            </div>
            <div className='survey-contain-result-line'>
              <span style={{ width: `${item.interest}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className='survey-contain-button'>
        <Button className='survey-contain-button-large' variant={ButtonVariant.Contained}>
          Next question
        </Button>
      </div>
    </>
  );
};

export default SurveyResult;
