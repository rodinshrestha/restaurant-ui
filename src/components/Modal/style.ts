import { rem } from "polished";
import styled from "styled-components";

import { maxMediaQuery } from "@/theme/utils";
import { theme } from "@/theme";

export const StyledDiv = styled.div`
  display: block;
  overflow: hidden auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100vh;

  .modal-dialog {
    position: relative;
    width: auto;
    margin: ${rem(50)} auto;
    pointer-events: none;
    display: flex;
    min-height: calc(100% - (50px * 2));

    .modal-search {
      margin-bottom: ${rem(35)};
      width: 50%;

      ${maxMediaQuery("md")} {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  .modal-content {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    pointer-events: auto;
    margin: auto;
    background-color: ${theme.color.primary};
    background-clip: padding-box;
    outline: 0;
    border: 0;
    padding: ${rem(50)} ${rem(50)};
    width: 100%;
    border-radius: 12px;
    height: calc(100% - 100px);

    ${maxMediaQuery("md")} {
      padding: ${rem(35)};
      width: 95%;
      max-width: 95%;
    }

    ${maxMediaQuery("sm")} {
      padding: ${rem(35)} ${rem(20)};
    }

    .modal-header {
      padding: 0;
      border-bottom: 0;

      .modal-title {
        text-align: center;
        width: 100%;
        display: block;
        margin-bottom: ${rem(20)};
        margin-top: ${rem(10)};
        text-align: center;

        h3,
        h4,
        h5,
        h6 {
          margin-bottom: 0;
        }
      }

      .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        font-size: 21px;

        ${maxMediaQuery("md")} {
          top: 15px;
          right: 15px;
        }

        span {
          font-size: ${rem(14)};
          line-height: ${rem(22)};

          ${maxMediaQuery("md")} {
            font-size: ${rem(12)};
          }
        }

        i {
          font-size: ${rem(12)};
          margin-left: ${rem(15)};

          ${maxMediaQuery("md")} {
            margin-left: ${rem(10)};
          }
        }

        &:hover {
          text-decoration: none;
          opacity: 0.7;
        }
      }
    }
  }

  .modal-body {
    padding: 0;
    width: 100%;
    position: relative;
    min-height: 50px;
  }

  &.delivery-list-modal,
  &.contact-list-modal {
    .modal-content {
      height: calc(100vh - 100px);
    }
  }
`;
