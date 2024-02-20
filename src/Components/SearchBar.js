import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const SearchBar = () => {
      const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
        <Input placeholder="Search for Search Bar" width="auto" onChange={(e)=>setSearchTerm(e.target.value)}/>

    </div>
  )
}

export default SearchBar