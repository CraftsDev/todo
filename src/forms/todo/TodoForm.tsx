import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { ErrorMessage, Form, Formik } from 'formik';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { TodoListContext } from '../../App';
import { ucFirst } from '../../core/helpers';
import history from '../../history';
import { reusablePaperStyle, reusableIconStyle } from '../../styles/shared';
import TodoFormSchema from './TodoFormSchema';

const useTodoFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    formPaper: {
      ...reusablePaperStyle(theme),
    },
    errorMessage: {
      color: theme.palette.error.main,
      fontSize: theme.typography.h5.fontSize,
      margin: '.5rem 0',
    },
    icon: { ...reusableIconStyle(theme) },
  })
);

/* this should be tested. */
export const getNextTodoId = (sortedTodos: TodoList) => {
  const lastTodo = sortedTodos[sortedTodos.length - 1];
  if (lastTodo) return { id: lastTodo.id + 1 };
  else return { id: 1 };
};

/* Initial Form Values and Type */
const initDate = moment();
export const todoFormInitVals = {
  name: '',
  desc: '',
  exp: {
    has: false,
    date: initDate,
  },
};
type TodoFormInitVals = typeof todoFormInitVals;

const TodoForm = (props: { addEdit: 'add' | 'edit' } & RouteComponentProps<{ id: string }>) => {
  const { addEdit, match } = props;
  const { id } = match.params;
  const classes = useTodoFormStyles();
  const { list, setTodoList, deleteTodo } = useContext(TodoListContext);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDeleteDialogClose = (id: number, todoList: TodoList) => {
    if (setTodoList) setTodoList(deleteTodo(id, list));
    history.push(`/edit-list`);
  };

  const handleDelete = () => (event: React.MouseEvent<any, MouseEvent>) => {
    setDeleteDialogOpen(true);
  };

  const handleSubmit = (values: TodoFormInitVals) => {
    if (addEdit === 'add') {
      const sortedTodos = list.sort((a: Todo, b: Todo) => a.id - b.id);
      const newTodo = { ...getNextTodoId(sortedTodos), ...values, dateCreated: moment() };
      // async http request would typically be made here, I favor axios over fetch for better cross browser compability.
      if (setTodoList) setTodoList([...list, newTodo]);

      history.push('/read-list');
    } else {
      if (setTodoList) setTodoList(list.map((todo: Todo) => (+id === todo.id ? { ...values, id: +id } : todo)));
      history.push('/read-list');
    }
  };

  const [initVals, setInitVals] = useState(todoFormInitVals);
  useEffect(() => {
    if (addEdit === 'add') setInitVals(todoFormInitVals);
    else setInitVals(list.filter((todo: Todo) => todo.id === +id)[0]);
  }, [id, addEdit, list]);

  return (
    <Formik
      enableReinitialize
      initialValues={initVals}
      validationSchema={TodoFormSchema}
      onSubmit={(values) => handleSubmit(values)}>
      {({ handleChange, handleBlur, setFieldValue, values }) => {
        const { name, desc, exp } = values;
        const { has, date } = exp;
        return (
          <>
            <Typography variant={'h3'} color={'primary'}>
              {`${ucFirst(addEdit)} Todo`}
            </Typography>
            <Paper className={classes.formPaper}>
              <Form autoComplete="off">
                {/* DRY - this could be turned into a reusable piece. */}
                <Box my={2}>
                  <TextField
                    data-testid="nameField"
                    id="nameField"
                    name="name"
                    label="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={name}
                    fullWidth
                  />
                  <ErrorMessage component={Typography} className={classes.errorMessage} name="name" />
                </Box>
                <Box my={2}>
                  <TextField
                    data-testid="descField"
                    id="descField"
                    name="desc"
                    label="Description"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={desc}
                    fullWidth
                  />
                  <ErrorMessage component={Typography} className={classes.errorMessage} name="desc" />
                </Box>
                <Box my={2}>
                  <FormControlLabel
                    data-testid="hasExpDateField"
                    id="hasExpDateField"
                    name="exp.has"
                    label="Add Expiration Date"
                    labelPlacement="end"
                    control={<Checkbox color={'primary'} value={has} />}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={has}
                    checked={has}
                  />
                  <ErrorMessage component={Typography} className={classes.errorMessage} name="exp.has" />
                </Box>
                {has && (
                  <Box my={2}>
                    {/* deprecated findDomNode use occuring inside this component, doesn't occur in production */}
                    <KeyboardDatePicker
                      margin="normal"
                      name="exp.date"
                      data-testid="expDateField"
                      id="expDateField"
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
                    <ErrorMessage component={Typography} className={classes.errorMessage} name="exp.date" />
                  </Box>
                )}
                <Box my={2}>
                  <ButtonGroup aria-label="outlined primary button group" fullWidth>
                    <Button variant="contained" type="reset">
                      <RotateLeftIcon className={classes.icon} />
                      {`Reset`}
                    </Button>
                    {id && (
                      <Button variant="contained" color="secondary" onClick={handleDelete()}>
                        <DeleteIcon className={classes.icon} />
                        {`Delete`}
                      </Button>
                    )}
                    <Button variant="contained" type="submit" color="primary">
                      {addEdit === 'add' ? <AddIcon className={classes.icon} /> : <EditIcon className={classes.icon} />}
                      {`submit ${addEdit}`}
                    </Button>
                  </ButtonGroup>
                </Box>
              </Form>
            </Paper>
            <Dialog
              open={deleteDialogOpen}
              onClose={() => {
                setDeleteDialogOpen(false);
              }}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to delete this todo?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    setDeleteDialogOpen(false);
                  }}
                  color="secondary"
                  variant="contained"
                  autoFocus /*so user doesn't accidentally delete*/
                >
                  No
                </Button>
                <Button onClick={() => handleDeleteDialogClose(+id, list)} color="primary" variant="contained">
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </>
        );
      }}
    </Formik>
  );
};

export default withRouter(TodoForm);
