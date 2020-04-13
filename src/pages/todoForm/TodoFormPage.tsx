import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import TodoForm from '../../forms/todo/TodoForm';

const isEditOrAdd = (pathname: string) => {
  if (pathname.includes('edit')) return 'edit';
  else return 'add';
};

const TodoFormPage = (props: RouteComponentProps<{}>) => {
  const { pathname } = props.location;
  return (
    <div>
      <TodoForm addEdit={isEditOrAdd(pathname)} />
    </div>
  );
};

export default withRouter(TodoFormPage);
