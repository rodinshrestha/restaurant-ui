import { breakpoints } from "./breakPoints";

const isBrowser = typeof window !== "undefined";

export const mediaQuery = (key: keyof typeof breakpoints) =>
  isBrowser ? `@media (min-width: ${breakpoints[key]})` : "";

export const maxMediaQuery = (key: keyof typeof breakpoints) =>
  isBrowser ? `@media (max-width: ${breakpoints[key]})` : "";
