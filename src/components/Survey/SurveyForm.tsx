import { Form, Formik } from 'formik';

import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/types';

import type { ISurveyForm } from 'components/Survey/types';
import './Survey.scss';

const initialValues = {
  picked: '',
};

const SurveyForm = ({ inputValues, showResult }: ISurveyForm) => {
  return (
    // TODO add form submission
    // eslint-disable-next-line no-console
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values.picked)}>
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <div className='survey-contain-radio'>
            {inputValues.map((item) => (
              <label key={item.value} htmlFor={item.answer}>
                <input
                  onChange={() => setFieldValue('picked', item.value)}
                  id={item.answer}
                  type='radio'
                  name='picked'
                  disabled={isSubmitting}
                />
                {item.answer}
              </label>
            ))}
          </div>
          <div className='survey-contain-button'>
            <Button
              disabled={isSubmitting}
              type='submit'
              className='survey-contain-button-small'
              variant={ButtonVariant.Contained}
            >
              Submit
            </Button>
            <Button onClick={showResult} className='survey-contain-button-large'>
              Vote to see result
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SurveyForm;
