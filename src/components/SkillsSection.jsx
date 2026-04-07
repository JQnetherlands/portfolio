import { Stack, Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";

const skills = [
  "React",
  "JavaScript",
  "Python",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "HTML",
  "CSS",
  "Git/GitHub",
  "Docker",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-learn",
  "Data Cleaning",
  "Data Analysis",
  "Data Visualization",
  "Linear Regression",
];

export const SkillsSection = () => {
  return (
    <Stack gap={6} align={"center"} textAlign={"center"}>
      <Heading size={"lg"}>Tech Stack</Heading>

      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 5 }}
        gap={4}
        w={"full"}
        maxW={"3xl"}
      >
        {skills.map((skill) => (
          <Box
            key={skill}
            p={4}
            borderRadius={"lg"}
            border={"1px solid"}
            borderColor={"gray.200"}
          >
            <Text fontWeight={"medium"}>{skill}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
