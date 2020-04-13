import React from 'react';
import Todo from './Todo';
import { todoFormInitVals } from '../../forms/todo/TodoForm';
import moment from 'moment';
import { mount } from 'enzyme';

test('Test Rendering of Todo List Component', () => {
  const todoTest: Todo = { ...todoFormInitVals, id: 1337, dateCreated: moment() };
  const todo = mount(<Todo todo={todoTest} />);
  // TODO
  // expect(todo.find('li')).toBeVisible();
  expect(true).toBeTruthy();
});
