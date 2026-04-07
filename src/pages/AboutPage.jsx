import { Stack, Heading, Text } from "@chakra-ui/react";

export const AboutPage = () => {
  return (
    <Stack gap={6} maxW={"3xl"}>
      <Heading>About Me</Heading>

      <Text>
        I&apos;m a passionate developer who enjoys building modern web
        applications and learning new techonologies.
      </Text>

      <Text>
        My main focus is buildig performant, accessible and scalable
        applications using tools like React, Node.js, back end with Express,
        Prisma and modern frontend frameworks
      </Text>

      <Text>
              When I&apos;m not coding, I enjoy learning about new techonologies,
              voluntering to mentor future developers in HackYourFuture.
      </Text>
    </Stack>
  );
};
