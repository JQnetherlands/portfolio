import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";

export const App = () => {
  const [project, setProject] = useState(null);

  return (
    <>
      <Header
        onHome={() => setProject(null)}
        onProjects={() => setProject(null)}
      />

      <Box p={6}>
        {project ? (
          <PortfolioItemPage item={project} reset={setProject} />
        ) : (
          <PortfolioPage onSelect={setProject} />
        )}
      </Box>
    </>
  );
};
