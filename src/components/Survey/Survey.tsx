import SurveyForm from 'components/Survey/SurveyForm';

import './Survey.scss';

const inputValues = ['Yes', 'No', 'Meybe'];

const Survey = () => {
  return (
    <div className='survey'>
      <div className='survey-head'>
        <p className='survey-head-title'>Reader Pool</p>
        <div className='survey-head-date'> 12 mar - 10 apr</div>
      </div>
      <div className='survey-contain'>
        <p className='survey-contain-ques'>
          Sed the amet est, Ad Piscing eliam est valorem Nonumiam Est game?
        </p>
        <SurveyForm inputValues={inputValues} />
      </div>
    </div>
  );
};

export default Survey;
