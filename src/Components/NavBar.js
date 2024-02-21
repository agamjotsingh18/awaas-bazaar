import React from "react";
import { Link as ReactLink, useLocation } from "react-router-dom";
import { Box, Flex, Text, Button, Stack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Logo from "./Logo";

const NavBar = ({ toggle, isOpen, setSelectedPropertyType, ...props }) => {
  const location = useLocation();

  return (
    <NavBarContainer {...props}>
      <Logo w="190px" color={["black", "black", "primary.500", "primary.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} location={location} setSelectedPropertyType={setSelectedPropertyType} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="black">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => (
  <Box display={{ base: "block", md: "none" }} onClick={toggle}>
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </Box>
);

const MenuItemLink = ({ to, children, ...rest }) => (
  <ReactLink to={to}>
    <Text display="block" {...rest}>
      {children}
    </Text>
  </ReactLink>
);

const MenuLinks = ({ isOpen, location, setSelectedPropertyType }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItemLink onClick={() => setSelectedPropertyType('rent')}>Rent</MenuItemLink>
      <MenuItemLink onClick={() => setSelectedPropertyType('sell')}>Sell</MenuItemLink>
      {location.pathname === "/dashboard" ? (
        <Menu>
          <MenuItemLink colorScheme="teal" mr={4} to="/listaproperty">
            List a property
          </MenuItemLink>
          <MenuItemLink to="/" colorScheme="teal" mr={4}>
            <Button
              size="md"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["#6c63ff", "#6c63ff", "primary.500", "primary.500"]}
              _hover={{
                textDecoration: "none",
              }}
            >
              Logout
            </Button>
          </MenuItemLink>
        </Menu>
      ) : (
        <>
          <MenuItemLink to="/login" isLast>
            <Button
              size="md"
              rounded="md"
              color={["primary.500", "primary.500", "#6c63ff"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
              }}
              border="1px"
              borderColor="gray.200"
            >
              Login
            </Button>
          </MenuItemLink>
          <MenuItemLink to="/signup" isLast>
            <Button
              size="md"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["#6c63ff", "#6c63ff", "primary.500", "primary.500"]}
              _hover={{
                textDecoration: "none",
              }}
            >
              Sign Up
            </Button>
          </MenuItemLink>
        </>
      )}
    </Stack>
  </Box>
);

const NavBarContainer = ({ children, ...props }) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    textDecoration="none"
    listStyleType="none"
    bg={["#e1e1e0"]}
    {...props}
  >
    {children}
  </Flex>
);

export default NavBar;
