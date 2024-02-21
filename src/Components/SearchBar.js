// SearchBar.js
import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <Input
        placeholder="Search for Search Bar"
        width="auto"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
