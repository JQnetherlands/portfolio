import { Stack, Heading, Text } from "@chakra-ui/react";

export const AboutPage = () => {
  return (
    <Stack gap={6} maxW={"3xl"}>
      <Heading>About Me</Heading>

      <Text>
        I&apos;m a passionate full-stack developer and data analyst who enjoys
        building modern, scalable web applications and extracting meaningful
        insights from data.
      </Text>

      <Text>
        My main focus is creating performant, accessible, and maintainable
        applications using tools like React, Node.js, Express, Prisma, and
        modern frontend frameworks, while also leveraging data analysis skills
        to drive informed decisions.
      </Text>

      <Text>
        When I&apos;m not coding or analyzing data, I enjoy exploring new
        technologies, learning best practices, and volunteering to mentor future
        developers at HackYourFuture.
      </Text>
    </Stack>
  );
};
