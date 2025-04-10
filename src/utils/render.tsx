import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@/providers/ThemeProvider";

export const render = (ui: React.ReactElement) => {
  return rtlRender(
    <ThemeProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>,
  );
};
