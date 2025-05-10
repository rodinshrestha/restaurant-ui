import styled from "styled-components";

import { maxMediaQuery } from "@/theme/utils";
import { theme } from "@/theme";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  gap: 120px;

  ${maxMediaQuery("md")} {
    gap: 50px;
  }

  .dish-group {
    .food-icon {
      font-family: ${theme.font.SoftCafe};
      font-weight: 400;
      font-style: normal;
      -webkit-font-feature-settings: normal;
      font-feature-settings: normal;
      font-variant: normal;
      letter-spacing: 0;
      margin-right: 8px;
      line-height: 0.5;
      text-transform: none;
      font-size: 30px;
    }
    .food-title {
      text-transform: uppercase;
    }
  }

  &:hover {
    .h6 {
      text-decoration: underline;
    }
    .price-group {
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

    @media (max-width: 1300px) {
      white-space: unset;
      word-wrap: break-word;
    }

    .span {
      display: flex;
      align-self: center;
    }
  }
`;
