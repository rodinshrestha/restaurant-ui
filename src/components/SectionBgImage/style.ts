import styled, { css } from "styled-components";

export const StyledDiv = styled.div<{ $bgImage?: string }>`
  ${({ $bgImage }) => css`
    &.section-image-wrapper {
      background-image: url(${$bgImage});
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 250px 0;
      background-position: 50%;

      position: relative;
      background-size: cover;
      .menu-title-content {
        z-index: 2;
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .h1 {
          color: #fff;
        }

        .section-title {
          padding-top: 0 !important;
        }
      }
    }
  `}
`;
