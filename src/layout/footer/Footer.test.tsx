import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Footer from './Footer';
import App from '../../App';

test('Test Footer Exist', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(wrappedApp.find(Footer)).toBeVisible;
});

test('Test rendering of copyright text', () => {
  const { getByText } = render(<Footer />);
  const footerCopyright = getByText(/Crafts Development © [0-9]{4}/i);

  expect(footerCopyright).toBeInTheDocument();
});
