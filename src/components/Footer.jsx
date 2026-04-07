import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box bg={"gray.100"} mt={20}>
      <Container maxW={"7xl"} py={8}>
        <Stack gap={4} align={"center"}>
          <HStack gap={6}>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={2}
              target="_blank"
              href="https://github.com/JQnetherlands"
              color={"blue.500"}
            >
              <Icon as={FaGithub} boxSize={5} />
              GitHub
            </Link>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={2}
              target="_blank"
              href="https://linkedin.com"
              color="blue.500"
            >
              <Icon as={FaLinkedin} boxSize={5} />
              LinkedIn
            </Link>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={2}
              target="_blank"
              href="mailto:jhonnyquebrada@gmail.com"
              color={"blue.500"}
            >
              <Icon as={FaEnvelope} boxSize={5} />
              Email
            </Link>
          </HStack>
          <Text fontSize={"sm"} color={"gray.500"}>
            © {new Date().getFullYear()} Jhonny Quebrada. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
