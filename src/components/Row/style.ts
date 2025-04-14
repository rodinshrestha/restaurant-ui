import styled from "styled-components";

import { RowProps } from ".";

const RowWrapper = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  &.no-gutter {
    margin-left: 0;
    margin-right: 0;
    > .col {
      padding-right: 0;
      padding-left: 0;
    }
  }
  &:not(&.no-gutter) {
    margin-right: -15px;
    margin-left: -15px;
  }
`;

export default RowWrapper;
