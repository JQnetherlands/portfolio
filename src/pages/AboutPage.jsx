import { Stack, Heading, Text } from "@chakra-ui/react";

export const AboutPage = () => {
  return (
    <Stack gap={6} maxW={"3xl"}>
      <Heading>About Me</Heading>

      <Text>
        I’m a passionate full-stack developer and data analyst with a strong
        interest in building modern, scalable applications and understanding how
        complex systems work. My journey into tech is non-traditional — I
        started learning programming on my own, driven by curiosity and a desire
        to create.
      </Text>

      <Text>
        Over time, I developed my skills through self-study and hands-on
        experience, and later strengthened my foundation by completing a
        full-stack development and data analysis program at Winc Academy. I
        enjoy working across the stack, using technologies like React, Node.js,
        Express, and Prisma, while also applying data analysis to support better
        decision-making.
      </Text>

      <Text>
        What defines me as a developer is my mindset: I’m a persistent learner
        who likes to deeply understand what I build. I pay attention to the
        trade-offs behind technical decisions, and I enjoy solving problems in a
        creative and structured way. I aim to write code that is not only
        functional, but also clean, maintainable, and scalable.
      </Text>

      <Text>
        I’m currently looking for opportunities where I can grow as a developer,
        contribute to meaningful projects, and work in a team that values
        learning, collaboration, and quality. In the long term, I want to become
        a strong backend or full-stack engineer who builds systems that have
        real impact.
      </Text>

      <Text>
        When I’m not coding, I enjoy learning about new technologies, improving
        my skills, and mentoring aspiring developers through communities like
        HackYourFuture.
      </Text>
    </Stack>
  );
};
