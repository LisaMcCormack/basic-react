import React from 'react';
import Person from './Person'


const People = ({list}) => {
  console.log(list)
  return (
  <ul>
    {list.map((person, index) =>
      {
        console.log(person);
        return (<li key={index}><Person data={person} /></li>)
      }
    )}
 </ul>

  );
}

export default People;
