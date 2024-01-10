import * as Yup from 'yup';

const itemValidate = Yup.object().shape({
  category: Yup.object().shape({ title: Yup.string().required() }),
  conference: Yup.object().shape({ title: Yup.string().required() }),
  team: Yup.object().shape({ title: Yup.string().required() }),
  storedFrom: Yup.object().shape({ title: Yup.string().required() }),
});

export const homeSchema = Yup.object().shape({
  mainArticle: itemValidate,
  subArticle: itemValidate,
  mostPopular: itemValidate,
  mostComments: itemValidate,
  breakdown: Yup.object().shape({
    first: itemValidate,
    second: itemValidate,
  }),
  potd: Yup.object().shape({
    img: Yup.string().required('Required'),
    alt: Yup.string().required('Required').min(3, 'Too Short!').max(40, 'Too Long!'),
    title: Yup.string().required('Required').min(15, 'Too Short!').max(100, 'Too Long!'),
    description: Yup.string().required('Required').min(15, 'Too Short!').max(180, 'Too Long!'),
    author: Yup.string().required('Required').min(3, 'Too Short!').max(50, 'Too Long!'),
  }),
});
