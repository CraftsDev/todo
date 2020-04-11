import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '@material-ui/core';

const TodoForm = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={() => {
        console.log('submitting todo form'); // can't have empty arrow funcs
      }}
      render={({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form autoComplete="off">
            <TextField label="name" name="name" required />
            <TextField label="Description" name="desc" />
          </Form>
        );
      }}
    />
  );
};

export default TodoForm;
