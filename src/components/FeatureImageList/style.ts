import styled, { css } from "styled-components";

import { defaultPalette } from "@/theme/color";

export const StyledArticle = styled.article<{
  $bgcolor: keyof typeof defaultPalette;
}>`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 4em 4em 2em;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 40em;
    min-height: 23em;
    overflow: hidden;
    position: relative;
    width: 40%;

    @media (max-width: ${theme.breakPoints.md}) {
      text-align: left;
      padding-left: 10px;
      justify-content: flex-start;
    }

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.color.bg};
      opacity: 0.7;
      top: 0;
      left: 0;
      transition: all 0.2s ease-in;
    }

    &:hover {
      &::before {
        opacity: 0;
      }
    }

    &.large {
      width: 60%;
    }

    @media (max-width: ${theme.breakPoints.md}) {
      width: 100% !important;
    }

    a {
      text-decoration: none;
    }

    .feature-title {
      .section-title {
        padding-top: 0;
      }
    }
  `}
`;
