import { Image, Card, Button } from "@chakra-ui/react";

export const PortfolioItemPage = ({ item, reset }) => {
  if (!item) return null;

  return (
    <Card.Root maxW="600px" mx="auto" p={6} gap={4}>
      <Card.Header textAlign="center">
        <Image
          src={item.imageUrl}
          w="200px"
          h="200px"
          mx="auto"
          objectFit="cover"
          borderRadius="md"
        />
      </Card.Header>

      <Card.Body>
        <Card.Title fontSize="xl" mb={2}>
          {item.title}
        </Card.Title>

        <Card.Description color="gray.600">{item.description}</Card.Description>
      </Card.Body>

      <Card.Footer justifyContent="center">
        <Button onClick={() => reset(null)} variant="outline">
          Back
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
