import * as Yup from 'yup';

const message = 'Incorrect user ID or password. Try again';

const validationSchema = Yup.object().shape({
  email: Yup.string().email(message).required('Required'),
  password: Yup.string()
    .required(message)
    .min(8, message)
    .matches(/[a-zA-Z]/, message),
});

export default validationSchema;
