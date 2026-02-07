import { Image, Card, HStack, Tag } from "@chakra-ui/react";

export const PortfoliItemCard = ({ item, onClick }) => {
    console.log(item.skills)
  return (
    <Card.Root
      onClick={() => onClick(item)}
      w="100%"
      h="100%"
      p={4}
      gap={8}
      textAlign="center"
      alignItems="center"
      cursor="pointer"
      borderRadius="xl"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{
        boxShadow: "xl",
        transform: "translateY(-4px)",
      }}
    >
      <Card.Header>
        <Image
          src={item.imageUrl}
          w={"200px"}
          h={"200px"}
          objectFit="cover"
          borderRadius="md"
        />
      </Card.Header>
      <Card.Body>
        <Card.Title fontSize="lg" mb={2}>
          {item.title}
        </Card.Title>
        <Card.Description fontSize="sm" color="gray.600">
          {item.description}
        </Card.Description>
        <HStack gap={4} justify="center" mt={4} wrap="wrap">
          {item.skills.map((skill) => (
            <Tag.Root key={skill} size="lg" variant="subtle">
              <Tag.Label>{skill}</Tag.Label>
            </Tag.Root>
          ))}
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};
