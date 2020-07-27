import React from 'react';

const Filter = (props) => (
  <>
    {' '}
    <input value={props.searched} onChange={props.handleChange} />{' '}
  </>
);

export default Filter;
