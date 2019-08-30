import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Person from './Person'


it('should render me a person', () => {
  const person = {
    name: 'lisa',
    age: 33,
    sex: 'female'

  }
  const {getByTestId} = render(<Person data={person}/>)

  expect(getByTestId('name')).toHaveTextContent(person.name)
  expect(getByTestId('age')).toHaveTextContent(person.age)
  expect(getByTestId('sex')).toHaveTextContent(person.sex)


});
