import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    background: white;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
