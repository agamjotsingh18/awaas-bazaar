import { Box, Button, ButtonGroup, Center, Menu, MenuButton, MenuItem, MenuItemLink, ReactLink } from '@chakra-ui/react';
import React, { useState } from 'react';
import Cards from './Cards';
import Data from './Data';
import SearchBar from './SearchBar';

const CardsHeader = ({ selectedPropertyType }) => {
  const [property, setProperty] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = property.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedPropertyType || card.propertyType === selectedPropertyType)
  );


  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCards.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Center>
        <SearchBar onSearch={setSearchTerm} />
      </Center>

      <Box mt={3} overflowX="hidden">
        <Box display={'inline-flex'} flexWrap="wrap" justifyContent="center">
          {currentCards.map((values) => (
            <Cards key={values.id} values={values} />
          ))}
        </Box>
      </Box>
      <ButtonGroup mt={4} justifyContent={'center'} display={'flex'}>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            onClick={() => paginate(number)}
            colorScheme={currentPage === number ? 'teal' : 'gray'}
            variant={currentPage === number ? 'solid' : 'outline'}
          >
            {number}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default CardsHeader;