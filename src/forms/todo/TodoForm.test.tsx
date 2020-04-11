import React from 'react';
import { render } from 'enzyme';
import TodoForm from './TodoForm';

describe('Testing the Todo Form', () => {
  const todoForm = render(<TodoForm />);
  it('Check if name field exist', () => {
    expect(todoForm.find(`input[name="name"]`)).toBeTruthy();
  });

  // it('check if description field exist', () => {
  //   expect(todoForm.find(`input[name="desc"]`)).toBeTruthy();
  // });
});
