import React from 'react';
import { render } from '@testing-library/react'
import Name from './Name';

it('renders the name Lisa', () => {
  const name = "Lisa"
  const {getByText} = render(<Name value={name}/>)

  expect(getByText(name)).toBeDefined()
});


it('renders the name Chris', () => {
  const name = "Chris"
  const {getByText} = render(<Name value={name}/>)

  expect(getByText(name)).toBeDefined()
});
