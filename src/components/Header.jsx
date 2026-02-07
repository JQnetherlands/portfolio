import { Box, Button, HStack } from "@chakra-ui/react";

export const Header = ({ onHome, onProjects }) => {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex="sticky"
      boxShadow="sm"
      px={6}
      py={4}
    >
      <HStack spacing={4}>
        <Button variant="ghost" onClick={onHome}>
          Home
        </Button>
        <Button variant="ghost" onClick={onProjects}>
          Projects
        </Button>
      </HStack>
    </Box>
  );
};
