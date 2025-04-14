import styled, { css } from "styled-components";

import { mediaQuery } from "@/theme/utils";
import { theme } from "@/theme";

//Default boots strap font size
// h1 Bootstrap heading (2.5rem = 40px)
// h2 Bootstrap heading (2rem = 32px)
// h3 Bootstrap heading (1.75rem = 28px)
// h4 Bootstrap heading (1.5rem = 24px)
// h5 Bootstrap heading (1.25rem = 20px)
// h6 Bootstrap heading (1rem = 16px)

type StyleProps = {
  color?: string;
};

const style = ({ color }: StyleProps) => css`
  &.h1,
  &.h2,
  &.h3,
  &.h4,
  &.h5,
  &.h6,
  &.p,
  &.subtitle2,
  &.subtitle1 {
    font-family: ${theme.font.defaultSystemTheme};
  }

  &.h1 {
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 4px;
  }

  &.h2 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 2px;
  }

  &.h3 {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 2px;
  }

  &.h4 {
    font-size: 24px;
    line-height: 30px;
  }

  &.h5 {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 1px;
    font-weight: 400;

    ${mediaQuery("md")} {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &.h6 {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
  }

  &.p {
    font-size: 20px;
    line-height: 40px;
    font-weight: 100;

    ${mediaQuery("md")} {
      font-size: 18px;
      line-height: 34px;
    }
  }

  &.subtitle1 {
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1px;

    ${mediaQuery("md")} {
      font-size: 14px;
      line-height: 24px;
    }
  }

  &.subtitle2 {
    font-size: 14px;
    line-height: 24px;
    strong {
      font-weight: 500;
    }
  }

  &.section-title {
    color: ${color || theme.color.black["100"]};
    font-size: 56px;
    font-family: inherit;
    position: relative;
    display: inline-block;
    padding-top: 100px;
    line-height: 60px;

    ${mediaQuery("md")} {
      padding-top: 50px;
      font-size: 38px;
      line-height: 40px;
    }
  }

  &.description-color {
    color: ${color};
  }

  &.section-title-helper {
    margin-top: 40px;

    ${mediaQuery("md")} {
      margin-top: 20px;
    }
  }
`;

export const H1 = styled.h1`
  ${({ color }: StyleProps) => style({ color })}
`;

export const H2 = styled.h2`
  ${({ color }: StyleProps) => style({ color })}
`;

export const H3 = styled.h3`
  ${({ color }: StyleProps) => style({ color })}
`;

export const H4 = styled.h4`
  ${({ color }: StyleProps) => style({ color })}
`;

export const H5 = styled.h5`
  ${({ color }: StyleProps) => style({ color })}
`;

export const H6 = styled.h6`
  ${({ color }: StyleProps) => style({ color })}
`;

export const Paragraph = styled.p`
  ${({ color }: StyleProps) => style({ color })}
`;

export const Span = styled.span`
  ${({ color }: StyleProps) => style({ color })}
`;
