import { SimpleGrid } from "@chakra-ui/react";
import { PortfoliItemCard } from "../components/PortfolioItemCard";
import { portfolioItems } from "../utils/data.js";

export const PortfolioPage = ({ onSelect }) => {
  return (
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3}} gap={{ base: 4, md: 6 }}>
        {portfolioItems.map((item) => (
          <PortfoliItemCard key={item.id} item={item} onClick={onSelect} />
        ))}
      </SimpleGrid>
  );
};
