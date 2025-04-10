import styled, { css, DefaultTheme } from "styled-components";

import { mediaQuery } from "@/theme/utils";

import { ContainerProps } from ".";

const ContainerWrapper = styled.div<ContainerProps & { $container: string }>`
  ${({ theme, $container }: { theme: DefaultTheme; $container: string }) => css`
    width: auto;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;

    ${mediaQuery("md")} {
      padding-right: 20px;
      padding-left: 20px;
    }

    ${mediaQuery("xl")} {
      padding-right: 10px;
      padding-left: 10px;
    }

    ${$container === "normal" &&
    css`
      @media (min-width: 576px) {
        max-width: 540px;
      }
      @media (min-width: 768px) {
        max-width: 720px;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1088px;
      }
      @media (min-width: 1367px) {
        max-width: 1200px;
      }
      @media (min-width: 1537px) {
        max-width: 1440px;
      }
      @media (min-width: 1681px) {
        max-width: 1610px;
      }
    `}

    &.p-0 {
      padding: 0;
    }
  `}
`;

export default ContainerWrapper;
