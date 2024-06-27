import React from 'react';

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search by course name or instructor"
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
