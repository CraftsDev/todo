import React from 'react';

export interface TodoListProps {
  viewOnly: boolean;
}

const TodoList = (props: TodoListProps) => {
  return <div id="todo-list">List of Todos Component</div>;
};

TodoList.defaultProps = {
  viewOnly: false,
};

export default TodoList;
