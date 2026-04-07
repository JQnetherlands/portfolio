import {
  Box,
  Flex,
  Heading,
  HStack,
  Button,
  Spacer,
  Container,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="blue.500"
      color="white"
      shadow="sm"
    >
      <Container maxW="7xl">
        <Flex h={16} align="center">
          <Heading size="md">My Portfolio</Heading>

          <Spacer />

          <HStack gap={6}>
            <Button
              as={RouterLink}
              to={"/"}
              variant="ghost"
              color="white"
              _hover={{ color: "black" }}
            >
              Home
            </Button>
            <Button
              as={RouterLink}
              to="/projects"
              variant="ghost"
              color="white"
              _hover={{ color: "black" }}
            >
              Projects
            </Button>
            <Button
              as={RouterLink}
              to={"/about"}
              variant="ghost"
              color="white"
              _hover={{ color: "black" }}
            >
              About
            </Button>
            <Button
              as={RouterLink}
              to={"/contact"}
              variant="ghost"
              color="white"
              _hover={{ color: "black" }}
            >
              Contact
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
