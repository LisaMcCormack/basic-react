import React from 'react';


const Person = ({data: {name, age, sex}}) => {
  return (
  <>
    <p data-testid="name">{name}</p>
    <p data-testid="age">{age}</p>
    <p data-testid="sex">{sex}</p>
 </>

  );
}

export default Person;
