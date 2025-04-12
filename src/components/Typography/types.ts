export type TypographySize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type TypographyWeight = "normal" | "medium" | "semibold" | "bold";
export type TypographyAlign = "left" | "center" | "right" | "justify";

export interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
  align?: TypographyAlign;
  margin?: string;
  lineHeight?: string;
  children?: React.ReactNode;
}
