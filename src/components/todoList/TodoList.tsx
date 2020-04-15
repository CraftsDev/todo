import {
  Button,
  Container,
  createStyles,
  Divider,
  Fab,
  Grid,
  List,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Pagination from '@material-ui/lab/Pagination';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TodoListContext } from '../../App';
import { chunk } from '../../core/helpers';
import history from '../../history';
import { reusablePaperStyle } from '../../styles/shared';
import Todo from '../todo/Todo';

const useListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    listPaper: {
      ...reusablePaperStyle(theme),
    },
    createNewButton: {
      margin: '2rem auto 2rem auto',
    },
    viewOnlyToggle: {
      marginRight: theme.spacing(1),
    },
    fab: {
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        margin: '1rem .5rem',
      },
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
    pagination: {
      '& > ul': {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
      },
    },
  })
);

export interface ListProps {
  viewOnly: boolean;
  readEdit: string;
}

const generateTodoListItems = (todoList: TodoList, viewOnly: boolean) => {
  if (todoList.length)
    return todoList.map((todo: Todo, index: number) => (
      <div key={todo.id}>
        <Todo todo={todo} key={todo.id} viewOnly={viewOnly} />
        {index !== todoList.length - 1 && <Divider />}
      </div>
    ));
};

const TodoList = (props: ListProps) => {
  const classes = useListStyles();
  const { viewOnly, readEdit } = props;
  const { list } = useContext(TodoListContext);

  const readEditMap = ['edit', 'read'];
  const opposite = readEditMap[+!readEditMap.findIndex((val) => val === readEdit)];
  const chunkList = chunk(list, 10);

  /* handle state */
  const [total, setTotal] = useState(list.length);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState(chunkList);
  const [page, setPage] = useState(chunkList[pageNumber] || []);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => setPageNumber(value);

  /* useEffect to detect deletion changes and update paginated list*/
  useEffect(() => {
    setTotal(list.length);
    setPages(chunk(list, 10));
    setPage(page);
  }, [list, page, setTotal, setPages, setPage]);

  /* set page to be rendered */
  useEffect(() => {
    const newList = chunk(list, 10);
    const offSet = pageNumber - 1;
    if (newList[offSet]) setPage(newList[offSet]);
    else setPage(newList[0]);
  }, [pageNumber, list]);

  return (
    <div id="todo-list" className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Todo List: {total} ({readEdit})
        </Typography>
        <Fab
          variant="extended"
          className={classes.fab}
          onClick={() => history.push(`/${opposite}-list`)}
          data-testid={`${opposite}list-toggle`}>
          {opposite === 'read' ? (
            <VisibilityIcon className={classes.viewOnlyToggle} color="primary" />
          ) : (
            <EditIcon className={classes.viewOnlyToggle} color="primary" />
          )}
          {opposite} list
        </Fab>
        <Paper className={classes.listPaper}>
          {pages.length > 0 && (
            <Pagination
              count={pages.length}
              color="primary"
              className={classes.pagination}
              showFirstButton
              showLastButton
              onChange={handlePageChange}
            />
          )}
          <List dense={true}>
            {pages.length > 0 ? (
              generateTodoListItems(page, viewOnly)
            ) : (
              <Container>
                <Typography variant="h6">You currently have nothing to do. Take a break, you deserve it!</Typography>
              </Container>
            )}
          </List>
        </Paper>
      </Grid>
      {!viewOnly && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/add');
          }}
          className={classes.createNewButton}>
          Create New Todo
        </Button>
      )}
    </div>
  );
};

TodoList.defaultProps = {
  viewOnly: false,
};

export default TodoList;
