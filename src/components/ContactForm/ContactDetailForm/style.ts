import styled from "styled-components";

import { maxMediaQuery } from "@/theme/utils";

export const StyledDiv = styled.div`
  &.form-wrapper {
    border-right: 1px solid rgba(212, 212, 255, 0.1);
    flex-grow: 1;

    .contact-us-title {
      padding: 20px;
      padding-left: 0;
    }

    .form-inner-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 28px;
      row-gap: 40px;

      .col-6 {
        width: 48%;

        ${maxMediaQuery("md")} {
          width: 100%;
        }
      }

      .col-12 {
        width: 100%;
      }
    }
  }
`;
