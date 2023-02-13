import { Form, Formik } from 'formik';

import Button from 'components/Button/Button';
import { ButtonVariant } from 'components/Button/types';

interface ISurveyForm {
  inputValues: string[];
}
const initialValues = {
  picked: '',
};

const SurveyForm = ({ inputValues }: ISurveyForm) => {
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values.picked)}>
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <div className='survey-contain-radio'>
            {inputValues.map((item, index) => (
              <label key={index} htmlFor={item}>
                <input
                  onChange={() => setFieldValue('picked', item)}
                  id={item}
                  type='radio'
                  name='picked'
                  disabled={isSubmitting}
                />
                {item}
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
