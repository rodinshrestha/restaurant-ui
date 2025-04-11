import { ComponentType } from "react";

import { ThemeProvider } from "../providers/ThemeProvider";

export const withTheme = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  );

  return WrappedComponent;
};
