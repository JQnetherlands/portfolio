import { Card, Image, Stack, Heading, Text, Flex, Box } from "@chakra-ui/react";
import { PortfolioTag } from "./PortfolioTag";

export const PortfolioItemCard = ({ item, onClick }) => {
  return (
    <Card.Root
      borderRadius={"xl"}
      w="full"
      h="auto"
      cursor={"pointer"}
      _hover={{ transform: "scale(1.01)" }}
      transition={"transform 0.15s ease"}
      onClick={() => onClick(item)}
    >
      <Card.Body>
        <Box
          w={"full"}
          aspectRatio={{ base: 16 / 9, sm: 3 / 2, md: 4 / 3, lg: 1 / 1 }}
          overflow={"hidden"}
          borderRadius={"xl"}
        >
          <Image
            src={item.imageUrl}
            w={"100%"}
            h={"100%"}
            objectFit={"contain"}
            objectPosition={"center"}
          />
        </Box>

        <Stack mt={{ base: 4, md: 6 }} gap={{ base: 2, md: 3 }}>
          <Heading size={{ base: "sm", md: "md" }}>{item.title}</Heading>
          <Text noOfLines={{ base: 3, md: 2 }}>{item.summary}</Text>
          <Flex gap={2} wrap={"wrap"}>
            {item.skills.map((skill) => (
              <PortfolioTag key={skill}>{skill}</PortfolioTag>
            ))}
          </Flex>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};
