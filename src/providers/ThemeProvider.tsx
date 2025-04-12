import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "@/theme";
import { GlobalStyles } from "@/theme/GlobalStyles";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
