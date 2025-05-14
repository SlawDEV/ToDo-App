import React from "react";
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.600" color="white" py={4} px={8} boxShadow="md">
      {/* Logo or Title */}
      <Heading as="h1" size="lg">
        TodoApp
      </Heading>

      <Spacer />
    </Box>
  );
};

export default Navbar;
