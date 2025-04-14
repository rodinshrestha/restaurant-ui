import React, { memo, useMemo } from "react";

import clsx from "clsx";
import { CSSProperties } from "styled-components";

import { H1, H2, H3, H4, H5, H6, Paragraph, Span } from "./styles";

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TagType = HeadingType | "p" | "span" | "subtitle1" | "subtitle2";

export interface TypographyProps {
  as: TagType;
  className?: string;
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  testId?: string;
  color?: string;
}

const TypographyComponent = ({
  as = "p",
  className,
  children,
  onClick,
  style,
  title,
  testId,
  color,
}: TypographyProps) => {
  const Element = useMemo(() => {
    switch (as) {
      case "h1":
        return H1;
      case "h2":
        return H2;
      case "h3":
        return H3;
      case "h4":
        return H4;
      case "h5":
        return H5;
      case "h6":
        return H6;
      case "span":
        return Span;
      default:
        return Paragraph;
    }
  }, [as]);

  if (!children) return null;

  const defaultContent = typeof children === "string" ? children : "content";

  return (
    <Element
      className={clsx(as.toLowerCase(), className)}
      onClick={onClick}
      style={style}
      title={title || defaultContent}
      data-testid={testId || "footer-content"}
      color={color}
    >
      {children}
    </Element>
  );
};

export default memo(TypographyComponent);
