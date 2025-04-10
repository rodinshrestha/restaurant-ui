import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { theme } from "@/theme";

export const render = (ui: React.ReactElement) => {
  return rtlRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};
