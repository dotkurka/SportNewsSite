import * as Yup from 'yup';

export const signInValidation = Yup.object().shape({
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('email invalid').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(9, 'Passwords must have at least one uppercase (A - Z)')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter'),
});

export const logInValidation = Yup.object().shape({
  email: Yup.string().email('email inva').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(9, 'Too Short!')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter'),
});

export const newPasswordValidation = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(9, 'Too Short!')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const forgotPasswordValidation = Yup.object().shape({
  email: Yup.string().email('email inva').required('Required'),
});
