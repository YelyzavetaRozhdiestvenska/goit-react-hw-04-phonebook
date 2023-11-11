import React from 'react';

export const Filter = ({ filter, filterContact }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input value={filter}
        onChange={filterContact}
        placeholder="Search..."
        type="text"
        name="filter"></input>
    </>
  );
};
