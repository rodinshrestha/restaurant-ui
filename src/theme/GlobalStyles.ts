import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: "SoftCafe Sym SC";
    font-style: italic;
    font-weight: 400 900;
    font-display: swap;
    src: url(https://s3.amazonaws.com/imenupro-fonts/SoftSym.woff)
      format("woff2");
  }

  body {
    background-color: ${theme.color.white["100"]};
    overflow-x: hidden;
    font-family: ${theme.font.defaultSystemTheme};
    width: 100%;

    &.menu-open {
      height: 100vh;
      overflow: hidden;
    }

    .feature-image-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }

  a {
    text-decoration: none;
  }

  .page-not-found-wrapper {
    padding: 15rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .not-found-title {
      font-size: 67px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      .not-found-status-code {
        font-size: 100px;
      }
    }

    .not-found-helper-text {
      font-size: 24px;
      margin: 30px 0;
      color: #fff;
    }
    border-top: 1px solid rgba(212, 212, 255, 0.1);
  }

  .overflow-hidden {
    height: 100vh;
    overflow: hidden;
  }

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
    display: inline-flex;

    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 24px;
    }
  }
`}

 
`;
