import * as Yup from 'yup';

export const commentSchema = Yup.object().shape({
  comment: Yup.string().required('Required').min(3),
});

const nestedObject = Yup.object().shape({
  title: Yup.string().required('Required'),
});

export const articleSchema = Yup.object().shape({
  img: Yup.string().required('Required'),
  alt: Yup.string().required('Required').min(3, 'Too Short!').max(40, 'Too Long!'),
  title: Yup.string().required('Required').min(15, 'Too Short!').max(100, 'Too Long!'),
  content: Yup.string().required('Required').min(40, 'Too Short!'),
  conference: nestedObject,
  team: nestedObject,
  location: Yup.string().required('Required'),
});
