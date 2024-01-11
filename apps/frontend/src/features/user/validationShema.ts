import * as Yup from 'yup';

export const updateUserSchema = Yup.object().shape({
  lastName: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').notRequired(),
  firstName: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').notRequired(),
  email: Yup.string().email('Email invalid').optional(),
});

export const updatePasswordSchema = Yup.object().shape({
  password: Yup.string().required(),
  newPassword: Yup.string()
    .required()
    .min(9, 'Passwords must have at least one uppercase (A - Z)')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter'),
});
