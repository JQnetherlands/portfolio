import { useState } from "react";
import { Container } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";

export const App = () => {
  const [project, setProject] = useState();

  return (
    <>
      <Header
        onHome={() => setProject(null)}
        onProjects={() => setProject(null)}
      />

      <Container as={"main"} maxW={"7xl"} py={{ base: 6, md: 10 }}>
        {project ? (
          <PortfolioItemPage item={project} reset={setProject} />
        ) : (
          <PortfolioPage onSelect={setProject} />
        )}
      </Container>
    </>
  );
};
