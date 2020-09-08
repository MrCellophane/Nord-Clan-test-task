import * as yup from 'yup';

const validationFields = {
  name: yup.string().required('Название не должно быть пустым'),
  status: yup.string().required('Статус не должен быть пустым'),
  sum: yup
    .number('Поле должно содержать число')
    .typeError('Сумма должна быть числовым значением')
    .required('Сумма не должена быть пустой'),
  requisite: yup.string().required('Реквизиты не должены быть пустыми'),
  comment: yup.string(),
};

export const validationSchema = yup.object().shape({ ...validationFields });

export const initialValues = {
  name: '',
  status: 'Создан',
  sum: '',
  requisite: '',
  comment: '',
};
