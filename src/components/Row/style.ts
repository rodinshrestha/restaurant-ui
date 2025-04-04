import styled, { css } from "styled-components";

import { RowProps } from ".";

const RowWrapper = styled.div<RowProps & { $noGutter: boolean }>`
  ${({ $noGutter }) => css`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    ${$noGutter
      ? css`
          margin-right: 0;
          margin-left: 0;

          > .col {
            padding-right: 0;
            padding-left: 0;
          }
        `
      : css`
          margin-right: -10px;
          margin-left: -10px;
        `}
  `}
`;

export default RowWrapper;
