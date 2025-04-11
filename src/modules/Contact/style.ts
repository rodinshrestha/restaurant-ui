import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.coreColor.bg};
    font-family: ${theme.font.defaultSystemTheme};

    border-bottom: 1px solid rgba(212, 212, 255, 0.1);
    border-top: 1px solid rgba(212, 212, 255, 0.1);

    .section-bg-wrapper {
      background-image: url("https://ucarecdn.com/62bb8ec4-dac7-4d04-aaf9-4d4ea92a8d76/-/progressive/yes/-/format/auto/-/resize/2000x/&quot");
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 250px 0;
      background-position: 50%;
      z-index: 1;
      position: relative;
      background-size: cover;
      .menu-title-content {
        z-index: 10;
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: column;
        /* gap: 10px; */
        .h1 {
          color: #fff;
          &.section-title {
            padding-top: 0 !important;
          }
        }

        .h5 {
          margin-top: 25px;
        }

        .rember-us-wrapper {
          margin-left: 12px;
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          font-size: 18px;
        }
      }
    }

    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      padding: 80px 0;

      @media (max-width: ${theme.breakPoints.md}) {
        grid-template-columns: 1fr;
      }

      .contact-info-warpper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;

        .contact-title {
          padding: 20px;
          border-bottom: 1px solid #f2f2f2;

          @media (max-width: ${theme.breakPoints.md}) {
            padding-left: 0px;
          }

          .h4 {
            font-weight: 600;
            font-size: 22px;
          }
        }

        .contact-method {
          display: flex;
          gap: 20px;
          padding: 20px;
          position: relative;
          width: 100%;
          @media (max-width: ${theme.breakPoints.md}) {
            padding: 40px 0;
            overflow: hidden;
          }

          &::before {
            position: absolute;
            content: "";
            border-bottom: 1px solid #f2f2f2;
            width: calc(100vw + 3em);
            margin-left: -40px;
            bottom: 0;
          }

          .content-info {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            justify-content: center;
            transition: 0.3s all ease-in-out;
            &:hover {
              color: ${theme.color.green["100"]};
            }

            a {
              text-decoration: none;
              color: inherit;
              &:hover {
                text-decoration: underline;
              }
            }

            span {
              line-height: 28px;
            }
          }
        }
      }
    }
  `}
`;
