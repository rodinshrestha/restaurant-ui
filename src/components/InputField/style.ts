import styled from "styled-components";

import { theme } from "@/theme";

export const StyledDiv = styled.div`
  font-family: inherit;
  &.error {
    .label-wrapper {
      color: red;
    }
  }

  .label-wrapper {
    color: ${theme.color.primary};
    display: block;
    font-size: 14px;
    letter-spacing: 0.25em;
    margin: 0 0 1em;
    text-transform: uppercase;
  }

  .input-wrap {
    /* min-height: 51px; */

    .error-msg {
      color: red;
      margin-top: 10px;
    }
  }
`;

export const InputStyle = styled.input`
  height: 50px;
  width: 100%;
  background: rgba(212, 212, 255, 0.035);
  border: 1px solid #bababa;
  outline: 0;
  padding: 0 1em;
  font-family: inherit;
  font-size: 16px;
  color: ${theme.color.primary};
  letter-spacing: 1px;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    border: 1px solid #bababa;
  }

  &.error {
    border: 1px solid red;
  }

  &.disabled {
    cursor: not-allowed;
  }
`;
