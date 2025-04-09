import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    height: 300px;
    position: relative;
    overflow: hidden;

    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;

    @keyframes circle {
      0% {
        opacity: 1;
      }
      40% {
        opacity: 1;
      }
      100% {
        width: 200%;
        height: 200%;
        opacity: 0;
      }
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      display: block;
      content: "";
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 100%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      opacity: 0;
      cursor: pointer;
    }

    &:hover {
      cursor: pointer;

      &::before {
        -webkit-animation: circle 0.75s;
        animation: circle 0.75s;
      }

      img {
        /* -webkit-filter: grayscale(0); */
        /* filter: grayscale(0); */
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      /* -webkit-filter: grayscale(100%); */
      /* filter: grayscale(100%); */

      @media (max-width: ${theme.breakPoints.md}) {
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
      }
    }
  `}
`;
