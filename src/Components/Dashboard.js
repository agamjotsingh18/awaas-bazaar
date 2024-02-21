import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Button, Box, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, useColorMode, IconButton } from '@chakra-ui/react';
import NavBar from './NavBar';
import SearchHeader from './SearchHeader';
import CardsHeader from './CardsHeader';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Dashboard = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: useColorModeValue("", "") }}>
        <NavBar setSelectedPropertyType={setSelectedPropertyType} />
        <SearchHeader />
        <CardsHeader selectedPropertyType={selectedPropertyType} />
<br/>
        <Box
          mt="auto"
          textAlign="center"
          padding="1rem"
          borderTop="1px"
          borderColor="gray.200"
          bg={useColorModeValue("#e1e1e0", "#91a3b0")} // Change background color based on color mode
        >
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
          &copy; 2024 Awaas Bazaar. All rights reserved.
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
