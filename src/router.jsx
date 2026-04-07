import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <PortfolioPage />,
      },
      {
        path: "projects/:id",
        element: <PortfolioItemPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
        {
            path: "contact",
            element: <ContactPage />
      },
    ],
  },
]);

export default router;
