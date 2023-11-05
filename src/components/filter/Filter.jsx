import React from 'react';

export const Filter = ({ filterContact }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="name" onChange={filterContact}></input>
    </>
  );
};
