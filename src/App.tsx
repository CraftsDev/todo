import MomentUtils from '@date-io/moment';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { createContext, useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import history from './history';
/* Import Layout Components */
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import { drawerWidth } from './layout/header/headerStyles';
import todos, { emptyTodoArray } from './resources/todos';
import theme from './theme';

const appStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawerWidth,
      },
    },
    toolbar: theme.mixins.toolbar,
  })
);

export const deleteTodo = (id: number, todoList: TodoList) => todoList.filter((todo: Todo) => todo.id !== id) || [];

export interface TodoListContextI {
  list: TodoList;
  setTodoList: SetTodoList;
  deleteTodo: typeof deleteTodo;
}

export const TodoListContext = createContext<TodoListContextI>({ list: todos, setTodoList: null, deleteTodo });
const getTodoLocalStore = () => {
  let todosString;
  try {
    todosString = localStorage.getItem('todos');
  } finally {
    return JSON.parse(todosString || '[]');
  }
};

const App = () => {
  const todosStore = getTodoLocalStore() || emptyTodoArray;
  const [todoList, setTodoList] = useState(todosStore);

  const classes = appStyles();

  /* Store Todos */
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);
  return (
    <Router history={history}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <TodoListContext.Provider value={{ list: todoList, setTodoList, deleteTodo }}>
            <div className="App">
              <Header />
              <div className={classes.content}>
                <div className={classes.toolbar} />
                <AppRouter />
                <Footer />
              </div>
            </div>
          </TodoListContext.Provider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
