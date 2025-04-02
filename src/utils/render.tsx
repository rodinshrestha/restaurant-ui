import { render as reactRender } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { theme } from "../theme";

export const render = (component: React.ReactNode) => {
  return reactRender(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
