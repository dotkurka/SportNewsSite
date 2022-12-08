import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('email inva').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Min 8')
    .matches(/[a-zA-Z]/, 'un Valid'),
});

export default validationSchema;
