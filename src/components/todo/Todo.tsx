import {
  Button,
  Chip,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { TodoListContext } from '../../App';
import history from '../../history';

const useTodoStyles = makeStyles((theme: Theme) =>
  createStyles({
    todoListItem: {
      padding: '1rem 100px 1rem 0',
    },
    todoListItemViewOnly: {
      padding: '1rem 0 1rem 0',
    },
    dateDisplay: {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    expChip: {
      margin: theme.spacing(1, 0),
    },
    ListItemSecondaryAction: {
      '& > *': {
        marginLeft: theme.spacing(1),
      },
    },
  })
);

interface TodoProps {
  todo: Todo;
  viewOnly: boolean;
}

const Todo = (props: TodoProps) => {
  const { todo, viewOnly } = props;
  const { name, desc, dateCreated, exp } = todo;
  const { id } = todo;

  const { list, setTodoList, deleteTodo } = useContext(TodoListContext);
  const classes = useTodoStyles();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDeleteDialogClose = (id: number, todoList: TodoList) => {
    if (setTodoList) setTodoList(deleteTodo(id, todoList));
  };

  const expired = moment().isAfter(exp.date);

  const handleDelete = () => (event: React.MouseEvent<any, MouseEvent>) => {
    setDeleteDialogOpen(true);
  };

  const handleEdit = (id: number) => (event: React.MouseEvent<any, MouseEvent>) => history.push(`/edit/${id}`);

  return (
    <>
      <ListItem className={viewOnly ? classes.todoListItemViewOnly : classes.todoListItem}>
        <ListItemText>
          <Typography variant="h5" color="primary">
            {name}:
          </Typography>
          <Typography paragraph>{desc}</Typography>
          <div>
            <Typography className={classes.dateDisplay} display="inline">
              {`Created: `}
            </Typography>
            <Typography display="inline">{moment(dateCreated).format('dddd MMMM DD, YYYY')}</Typography>
          </div>
          {exp.has && (
            <div>
              <Typography className={classes.dateDisplay} display="inline">
                {`Expires: `}
              </Typography>
              <Typography display="inline">{moment(exp.date).format('dddd MMMM DD, YYYY')}</Typography>
            </div>
          )}
          <Typography>
            {expired && exp.has && <Chip className={classes.expChip} label="expired" color="secondary" />}
          </Typography>
        </ListItemText>
        {!viewOnly && (
          <ListItemSecondaryAction className={classes.ListItemSecondaryAction}>
            <IconButton color="primary" edge="end" aria-label="edit" value={id} onClick={handleEdit(id)}>
              <EditIcon />
            </IconButton>
            <IconButton color="primary" edge="end" aria-label="delete" value={id} onClick={handleDelete()}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      {/* deprecated findDomNode use occuring inside this component */}
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
          <Button onClick={() => handleDeleteDialogClose(id, list)} color="primary" variant="contained">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Todo.defaultProps = {
  viewOnly: false,
};

export default Todo;
