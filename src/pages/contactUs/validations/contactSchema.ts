import * as yup from 'yup';

export const contactSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter the valid email'),
  name: yup.string().required('Name is required '),
  message: yup
    .string()
    .max(300, 'Max 300 words allowed')
    .required('Write some message'),
});
