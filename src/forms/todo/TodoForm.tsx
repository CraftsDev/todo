import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, ButtonGroup, Button, Box, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import PublishIcon from '@material-ui/icons/Publish';
import TodoFormSchema from './TodoFormSchema';
import moment from 'moment';

const TodoForm = () => {
  const initDate = moment();
  return (
    <Formik
      initialValues={{
        nameField: '',
        descField: '',
        createdDate: initDate,
        exp: {
          has: false,
          date: initDate,
        },
      }}
      onSubmit={() => {
        console.log('submitting todo form'); // can't have empty arrow funcs
      }}
      validationSchema={TodoFormSchema}>
      {({ handleChange, handleBlur, handleReset, handleSubmit, setFieldValue, values }) => {
        const { nameField, descField, exp } = values;
        const { has, date } = exp;
        return (
          <>
            <Typography variant={'h3'} color={'primary'}>
              Create New Todo
            </Typography>
            <Form autoComplete="off" onSubmit={handleSubmit} onReset={handleReset}>
              <Box my={2}>
                <TextField
                  id="nameField"
                  name="nameField"
                  label="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={nameField}
                  required
                  fullWidth
                />
              </Box>
              <Box my={2}>
                <TextField
                  id="descField"
                  name="descField"
                  label="Description"
                  multiline
                  rows={4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={descField}
                  fullWidth
                />
              </Box>
              <Box my={2}>
                <FormControlLabel
                  id="expDateField"
                  name="exp.has"
                  label="Add Expiration Date"
                  labelPlacement="end"
                  control={<Checkbox color={'primary'} />}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={has}
                />
              </Box>
              {has && (
                <Box my={2}>
                  <KeyboardDatePicker
                    margin="normal"
                    name="exp.date"
                    id="expDate"
                    label="Date"
                    format="MM/DD/YYYY"
                    value={date}
                    onChange={(moment) => {
                      setFieldValue('exp.date', moment);
                    }}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Box>
              )}
              <Box my={2}>
                <ButtonGroup color="primary" aria-label="outlined primary button group" fullWidth>
                  <Button type="reset" onClick={() => handleReset()}>
                    <RotateLeftIcon /> Reset
                  </Button>
                  <Button type="submit">
                    <PublishIcon /> Submit
                  </Button>
                </ButtonGroup>
              </Box>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default TodoForm;
