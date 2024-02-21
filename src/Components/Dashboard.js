import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Button, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import NavBar from './NavBar';
import SearchHeader from './SearchHeader';
import CardsHeader from './CardsHeader';

const Dashboard = () => {
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

export default Dashboard;
