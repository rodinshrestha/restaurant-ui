import styled, { css } from "styled-components";

import bgImage from "@/assets/image/fade-mountain.svg";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    padding: 60px 0;
    background: url(${bgImage}) no-repeat 50% fixed;
    background-size: cover;

    .oppening-hours-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
      .oppening-hour-info {
        text-transform: uppercase;
        text-align: center;
        @media (max-width: ${theme.breakPoints.md}) {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .p {
          color: #000000;
          font-size: 16px;
          font-weight: 400;
        }
      }

      .order-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .location-wrapper {
          display: flex;
          gap: 10px;
          align-items: center;

          img {
            width: 20px;
            object-fit: contain;
          }

          a {
            color: ${theme.color.black["100"]};
            text-decoration: underline;
            font-weight: 400;
          }
        }
      }
    }
  `}
`;
