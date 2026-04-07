import { Container } from "@chakra-ui/react";

import { Header } from "./components/Header";

import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

export const App = () => {

  return (
    <>
      <Header/>

      <Container as={"main"} maxW={"7xl"} py={{ base: 6, md: 10 }}>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};
