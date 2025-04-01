import styled, { DefaultTheme, css } from "styled-components";

const defaultStyle = (theme: DefaultTheme) => css`
  text-decoration: none;
  height: 3.5em;
  line-height: 3.5em;
  color: ${theme.coreColor.textColor};
  display: inline-block;
  padding: 0 1.75em;
  outline: none;
  font-family: ${theme.font.defaultSystemTheme};
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;

  &.contained {
    background-color: ${theme.color.orange["100"]};
    box-shadow: none;
    color: ${theme.color.white["100"]};
    border: 1px solid ${theme.color.orange["100"]};
    height: 100%;

    &:hover {
      opacity: 0.8;
    }
  }

  &.outline {
    box-shadow: none;
    color: ${theme.coreColor.textColor};
    border: 2px solid ${theme.coreColor.textColor};
    height: 100%;

    &:hover {
      border: 2px solid ${theme.coreColor.highlight};
      color: ${theme.coreColor.highlight};
    }
  }

  &.letter-spacing {
    letter-spacing: 2px;
  }

  &.md {
    width: 300px;
    font-size: 18px;

    @media (max-width: ${theme.breakPoints.md}) {
      width: 220px;
      font-size: 14px;
    }
  }

  &.lg {
    width: 450px;
    font-size: 20px;

    @media (max-width: ${theme.breakPoints.md}) {
      width: 320px;
      font-size: 16px;
    }
  }

  &.disabled,
  &.isLoading {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledLink = styled.div`
  ${({ theme }) => css`
    a {
      ${defaultStyle(theme)}
    }
  `}
`;

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    ${defaultStyle(theme)}
  `}
`;
