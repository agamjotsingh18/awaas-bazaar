import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchHeader from './SearchHeader';
import CardsHeader from './CardsHeader';
import { Box } from '@chakra-ui/react';

const Home = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar setSelectedPropertyType={setSelectedPropertyType} />
        <SearchHeader />
        <CardsHeader selectedPropertyType={selectedPropertyType} />
     
        <Box
          mt="auto"
          textAlign="center"
          padding="1rem"
          borderTop="1px"
          borderColor="gray.200"
          bg="gray.50"
        >
          &copy; 2024 Awaas Bazaar. All rights reserved.
        </Box>
      </div>
    </>
  );
};

export default Home;
