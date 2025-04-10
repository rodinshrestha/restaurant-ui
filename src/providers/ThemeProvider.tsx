import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme as defaultTheme } from "@/theme";
import { GlobalStyles } from "@/theme/GlobalStyles";

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: {
  children: React.ReactNode;
  theme?: typeof defaultTheme;
}) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
