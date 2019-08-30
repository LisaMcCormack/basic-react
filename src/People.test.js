import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from "@testing-library/react";
import People from "./People";

it('should render all people in list', () => {
  const people = [
    {
      name: 'Ricky',
      age: 34,
      sex: 'male'
    },
    {
      name: 'Chris',
      age: 35,
      sex: 'male'
    },
    {
      name: 'Zac',
      age: 3,
      sex: 'male'
    }
  ]

  // Test Id is data-testid which can be put of any element with a string value
  const { getByText } = render(<People list={people}/>)

  expect(getByText('Ricky')).toBeInTheDocument()
  expect(getByText('Chris')).toBeInTheDocument()
  expect(getByText('Zac')).toBeInTheDocument()
});
