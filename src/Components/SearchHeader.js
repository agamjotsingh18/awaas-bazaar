// SearchHeader.js
import { Box, Flex, Heading } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

const SearchHeader = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      m={4}
    >
      <Heading
        as="h2"
        size="xl"
        display={{ base: "none", md: "block" }}
        mx="auto" 
      >
        Search Properties
      </Heading>

    </Flex>
  );
};

export default SearchHeader;
