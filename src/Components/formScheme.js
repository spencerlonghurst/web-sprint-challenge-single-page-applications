import * as yup from 'yup';

const formSchema = yup.object().shape({
  size: yup
  .string(),
  topping1: yup
  .boolean(),
  topping2: yup
  .boolean(),
  topping3: yup
  .boolean(),
  topping4: yup
  .boolean(),
  special: yup
  .string(),
  name: yup
  .string()
  .trim()
  .required('A name is required!')
  .min(5, 'name must be at least 2 characters')

})

export default formSchema;