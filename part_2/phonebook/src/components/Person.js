import React from 'react';

const Person = ({ person, deleteEntry }) => (
  <>
    <p>
      {person.name} {person.number}
    </p>
    <button onClick={deleteEntry}>delete</button>
  </>
);

export default Person;
