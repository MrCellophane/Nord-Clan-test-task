import * as yup from 'yup';

const validationFields = {
  email: yup
    .string()
    .email('Введите корректный адресс электронной почты')
    .required('Поле почты не должно быть пустым'),
  password: yup.string().required('Поле пароля не должно быть пустым'),
};

export const validationSchema = yup.object().shape({ ...validationFields });

export const initialValues = {
  email: '',
  password: '',
};
