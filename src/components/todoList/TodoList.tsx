import React from 'react';

interface TodoListProps {
  viewOnly: boolean;
}

const TodoList = (props: TodoListProps) => {
  return <div>List of Todos Component</div>;
};

TodoList.defaultProps = {
  viewOnly: false,
};

export default TodoList;
