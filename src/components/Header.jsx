import { Box, Flex, Heading, HStack, Button, Spacer, Container } from "@chakra-ui/react";

export const Header = ({ onHome, onProjects }) => {
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
              variant="ghost"
              color="white"
              _hover={{ color: "black" }}
              onClick={onHome}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              color="white"
              _hover={{ color: "black" }}
              onClick={onProjects}
            >
              Projects
            </Button>
            <Button variant="ghost" color="white" _hover={{ color: "black" }}>About</Button>
            <Button variant="ghost" color="white" _hover={{ color: "black" }}>Contact</Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
