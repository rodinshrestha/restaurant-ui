import { ComponentType, Suspense } from "react";

import { ThemeProvider } from "../providers/ThemeProvider";

export const withTheme = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <ThemeProvider>
      <Suspense fallback={null}>
        <Component {...props} />
      </Suspense>
    </ThemeProvider>
  );

  return WrappedComponent;
};
