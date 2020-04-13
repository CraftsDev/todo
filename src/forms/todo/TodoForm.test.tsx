import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from './TodoForm';

describe('Testing the Todo Form', () => {
  const todoForm = shallow(<TodoForm addEdit="add" />);
  it('Check for name field.', () => {
    expect(todoForm.find(`#nameField`)).toBeTruthy();
  });

  it('check for description field.', () => {
    expect(todoForm.find(`#descField`)).toBeTruthy();
  });

  it('check for "has expire date" checkbox.', () => {
    expect(todoForm.find(`#hasExpDateField`)).toBeTruthy();
  });

  it('check for expire date field', () => {
    expect(todoForm.find(`#expDateField`)).toBeTruthy();
  });
});
