import { ComponentType } from "react";

export const withTheme = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => <Component {...props} />;

  return WrappedComponent;
};
