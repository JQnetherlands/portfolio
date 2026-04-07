import { SimpleGrid } from "@chakra-ui/react";
import { PortfolioItemCard } from "../components/PortfolioItemCard";
import { portfolioItems } from "../utils/data.js";
import { useNavigate } from "react-router-dom";

export const PortfolioPage = () => {
  const navigate = useNavigate();
  return (
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3}} gap={{ base: 4, md: 6 }}>
        {portfolioItems.map((item) => (
          <PortfolioItemCard key={item.id} item={item} onClick={() => navigate(`/projects/${item.id}`)} />
        ))}
      </SimpleGrid>
  );
};
