import {
  Stack,
  Heading,
  Text,
  Button,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { portfolioItems } from "../utils/data";
import { PortfolioItemCard } from "../components/PortfolioItemCard";
import { useNavigate } from "react-router-dom";
import { SkillsSection } from "../components/SkillsSection";

export const HomePage = () => {
  const navigate = useNavigate();

  const featuredProjects = portfolioItems.slice(0, 4);

  return (
    <Stack gap={16}>
      {/* HERO */}
      <Stack gap={6}>
        <Box>
          <Heading size={"2xl"} mb={4} textAlign={"center"}>
            Hi, I&apos;m Jhonny
          </Heading>

          <Text fontSize={"xl"} maxW={"2xl"} mx={"auto"}>
            Full-stack developer focused on building modern, scalable web
            applications with React, Node.js and modern web techonologies.
          </Text>
        </Box>

        <Stack direction={{ base: "column", sm: "row" }} justify={"center"}>
          <Button
            size={"lg"}
            colorScheme={"blue"}
            onClick={() => navigate("/projects")}
          >
            View My Projects
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </Button>
        </Stack>
      </Stack>

      <Stack gap={6} align={"center"} textAlign={"center"}>
        <Heading size={"lg"}>Featured Projects</Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} w={"full"}>
          {featuredProjects.map((item) => (
            <PortfolioItemCard
              key={item.id}
              item={item}
              onClick={() => navigate(`/projects/${item.id}`)}
            />
          ))}
        </SimpleGrid>
        <Button
          variant={"outline"}
          onClick={() => navigate("/projects")}
        >
          View All Projects
        </Button>
        <SkillsSection />
      </Stack>
    </Stack>
  );
};
