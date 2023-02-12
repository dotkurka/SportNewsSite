import { Form, Formik } from 'formik';

import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/types';

interface ISurveyFormItem {
  radio1: string;
  radio2: string;
  radio3: string;
}

interface ISurveyForm {
  initialValues: {
    picked: string;
  };
  inputValues: ISurveyFormItem;
}

const SurveyForm = ({ initialValues, inputValues }: ISurveyForm) => {
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values.picked)}>
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <div className='survey-contain-radio'>
            <label htmlFor='che1'>
              <input
                onChange={() => setFieldValue('picked', inputValues.radio1)}
                id='che1'
                type='radio'
                name='picked'
                disabled={isSubmitting}
              />
              Yes
            </label>
            <label htmlFor='che2'>
              <input
                onChange={() => setFieldValue('picked', inputValues.radio2)}
                id='che2'
                type='radio'
                name='picked'
                disabled={isSubmitting}
              />
              No
            </label>
            <label htmlFor='che3'>
              <input
                onChange={() => setFieldValue('picked', inputValues.radio3)}
                id='che3'
                type='radio'
                name='picked'
                disabled={isSubmitting}
              />
              Maybe
            </label>
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
            <Button className='survey-contain-button-large' variant={ButtonVariant.Default}>
              Vote to see result
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SurveyForm;
