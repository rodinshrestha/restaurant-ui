import { render as reactRender } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { theme } from "../theme";

export const render = (component: React.ReactNode) => {
  return reactRender(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{component}</BrowserRouter>
    </ThemeProvider>,
  );
};
