import styled, { css } from "styled-components";

import { theme } from "@/theme";
import { maxMediaQuery } from "@/theme/utils";

export const StyledDiv = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    gap: 120px;

    ${maxMediaQuery("md")} {
      gap: 50px;
    }

    .dish-group {
      .food-title {
        text-transform: uppercase;
      }
    }

    &:hover {
      .h6 {
        text-decoration: underline;
      }

      .price-group {
        /* font-weight: bold; */
        .span {
          text-decoration: underline;
        }
      }
    }

    ${maxMediaQuery("md")} {
      &:hover {
        .h6 {
          text-decoration: unset;
        }

        .price-group {
          font-weight: unset;
          .span {
            text-decoration: unset;
          }
        }
      }
    }
    .price-group {
      display: flex;
      white-space: nowrap;

      ${maxMediaQuery("md")} {
        white-space: unset;

        word-wrap: break-word;
      }

      .span {
        display: flex;
        align-self: center;
      }
    }
  `}
`;
