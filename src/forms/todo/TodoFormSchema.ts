import { object, string, boolean, date } from 'yup';

const TodoFormSchema = () =>
  object().shape({
    name: string()
      .required('Please provide a valid name for your todo item.')
      .min(3, 'Please provide a name that is at least 3 characters.') //real data?
      .max(255, 'Please refrain from using more than 255 characters.'), // protect DB size.
    desc: string().max(255, 'Please refrain from using more than 255 characters.'), // protect DB size.
    exp: object().shape({
      has: boolean(),
      date: date(),
    }),
  });

export default TodoFormSchema;
