import { Form, Formik } from 'formik';

import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/enums';

import type { ISurveyForm } from 'components/Survey/types';
import './Survey.scss';

const initialValues = {
  picked: '',
};

const SurveyForm = ({ inputValues, showResult }: ISurveyForm) => {
  return (
    // eslint-disable-next-line no-console -- TODO add form submission
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values.picked)}>
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <div className='survey-contain-radio'>
            {inputValues.map((item) => (
              <label htmlFor={item.answer} key={item.value}>
                <input
                  disabled={isSubmitting}
                  id={item.answer}
                  name='picked'
                  onChange={() => setFieldValue('picked', item.value)}
                  type='radio'
                />
                {item.answer}
              </label>
            ))}
          </div>
          <div className='survey-contain-button'>
            <Button
              className='survey-contain-button-small'
              disabled={isSubmitting}
              type='submit'
              variant={ButtonVariant.Contained}
            >
              Submit
            </Button>
            <Button className='survey-contain-button-large' onClick={showResult}>
              Vote to see result
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SurveyForm;
