import { useParams, useNavigate } from "react-router-dom";
import { portfolioItems } from "../utils/data.js";

import { Image, Card, Button, Stack, Box, Heading, Text, Flex } from "@chakra-ui/react";
import { PortfolioTag } from "../components/PortfolioTag.jsx"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const PortfolioItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = portfolioItems.find((p) => p.id === id);

  if (!item) return null;

  return (
    <Card.Root borderRadius={"xl"}>
      <Card.Body>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 8 }}
        >
          <Box
            flex={"1"}
            minW={{ base: "100%", md: "50%" }}
            aspectRatio={{ base: 16 / 9, sm: 3 / 2, md: 4 / 3, lg: 1 / 1 }}
            overflow={"hidden"}
            borderRadius={"xl"}
            bg={"gray.100"}
          >
            <Image
              src={item.imageUrl}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
            />
          </Box>
          <Stack flex={1} gap={{ base: 3, md: 4 }}>
            <Heading size={{ base: "md", lg: "lg" }}>{item.title}</Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>{item.description}</Text>
            <Flex gap={2} wrap={"wrap"}>
              {item.skills.map((s) => (
                <PortfolioTag key={s} size={{ base: "sm", md: "md" }}>
                  {s}
                </PortfolioTag>
              ))}
            </Flex>
            <Stack direction={"row"} gap={4} flexWrap={"wrap"}>
              <Button
                as={"a"}
                href={item.demoUrl}
                target={"_blank"}
                leftIcon={<FaExternalLinkAlt />}
                colorPalette={"blue"}
              >
                Live Demo
              </Button>
              <Button
                as={"a"}
                href={item.githubUrl}
                target="_blank"
                variant="outline"
                leftIcon={<FaGithub />}
              >
                GitHub
              </Button>
              <Button variant={"ghost"} onClick={() => navigate("/projects")}>
                Back to overview
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};
