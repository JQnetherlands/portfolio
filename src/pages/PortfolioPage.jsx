import { SimpleGrid, Heading, Box } from "@chakra-ui/react";
import { PortfoliItemCard } from "../components/PortfolioItemCard";
import { portfolioItems } from "../utils/data.js";

export const PortfolioPage = ({ onSelect }) => {
  return (
    <Box maxW="1200px" mx="auto" px={4}>
      <Heading mb={10} textAlign="center">
        Portfolio
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {portfolioItems.map((item) => (
          <PortfoliItemCard key={item.id} item={item} onClick={onSelect} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
