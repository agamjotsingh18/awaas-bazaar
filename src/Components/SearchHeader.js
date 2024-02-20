import { Box, Heading, Input, Select, Flex, StatDownArrow } from "@chakra-ui/react";
import { useState } from "react";
import SearchBar from "./SearchBar";


const SearchHeader=()=> {
  return (
    <>
    <Box>
      
      <Box className="row" m={4} >
        <Box className="col-8">
          <Heading as="h2" size="xl">
            Search Properties to Rent
          </Heading>
        </Box>
        <Box className="col-4">
       <SearchBar />
        </Box>
      </Box>
      <Box className="row" bgColor="#f3f3f3" p={4}>
        <Flex align="center" justify="center" >
          <Box display="flex" flexDirection="column">
          <h6 >Price Range</h6>
          <Select placeholder="Select option" width={170} mr={10}>
            <option value="$500-$1000">$500-$1000</option>
            <option value="$1001-$1500">$1001-$1500</option>
            <option value="$1501-$2000">$1501-$2000</option>
            <option value="$2001-$2500">$2001-$2500</option>
            <option value="$2501-$3000">$2501-$3000</option>
           
          </Select>
          </Box>
          
          <Select placeholder="Select option" width={200} mr={10}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option" width={200} mr={10}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option" width={200} mr={10}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
      </Box>
    </Box>
    </>
  );
}

export default SearchHeader;
