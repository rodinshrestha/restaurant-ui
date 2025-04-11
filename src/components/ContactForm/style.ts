import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    &.form-wrapper {
      border-right: 1px solid rgba(212, 212, 255, 0.1);
      flex-grow: 1;
      font-family: ${theme.font.defaultSystemTheme};

      .contact-us-title {
        padding: 20px;
        padding-left: 0;
      }

      /* .contact-title {
        padding-top: 0;
        margin-bottom: 2em;
      } */

      .form-inner-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 28px;
        row-gap: 40px;

        .col-6 {
          width: 48%;

          @media (max-width: ${theme.breakPoints.md}) {
            width: 100%;
          }
        }

        .col-12 {
          width: 100%;
        }
      }
    }
  `}
`;
