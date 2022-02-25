import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
  .string()
  .trim()
  .required('A name is required!')
  .min(5, 'Your name must be more than 5 characters')
})

export default formSchema;