import { ComponentType } from "react";

import { useTheme } from "styled-components";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { theme as defaultTheme } from "@/theme";

export const withTheme = <P extends object>(Component: ComponentType<P>) => {
  const WithTheme = (props: P) => {
    const theme = useTheme();

    console.log(theme, "@@@@@");
    return (
      <ThemeProvider>
        <Component {...props} theme={defaultTheme} />
      </ThemeProvider>
    );
  };

  return WithTheme;
};
