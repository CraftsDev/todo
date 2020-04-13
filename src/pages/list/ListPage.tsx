import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import TodoList from '../../components/todoList/TodoList';

const ListPage = (props: RouteComponentProps<{ readEdit: string }>) => {
  const { readEdit } = props.match.params;
  const viewOnly = readEdit === 'read';
  return (
    <div>
      <TodoList viewOnly={viewOnly} readEdit={readEdit} />
    </div>
  );
};

export default withRouter(ListPage);
