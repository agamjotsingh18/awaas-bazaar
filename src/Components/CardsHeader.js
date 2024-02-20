import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import Cards from './Cards';
import Data from './Data';

const CardsHeader = () => {
    const [property, setProperty] = useState(Data);

  return (
    <>
         <Box mt={3} overflowX="hidden">
        <Box display={"inline-flex"} flexWrap="wrap" justifyContent="center">
          {property.map((values) => {
            
            return (
                <>
                <Cards values={values} />
                </>
              )
            })}
          </Box>
        </Box>
    </>
  )
}

export default CardsHeader