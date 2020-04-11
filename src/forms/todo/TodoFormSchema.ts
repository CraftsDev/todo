import { object, string } from 'yup';

const TodoFormSchema = () =>
  object().shape({
    nameField: string()
      .required() // already marked required in MATERIAL-UI field, may be redundant?
      .min(3, 'Please provide text at least 3 character or longer.') //real data?
      .max(255, 'Please refrain from using more than 255 characters!'), // protect DB size.
    descField: string()
      .min(3, 'Please provide text at least 3 character or longer.') //real data?
      .max(255, 'Please refrain from using more than 255 characters!'), // protect DB size.
  });

export default TodoFormSchema;
