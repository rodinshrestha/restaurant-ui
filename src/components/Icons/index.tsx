import React from "react";

import { StyledDiv } from "./style";

type Props = {
  icon: string;
};

const Icons = ({ icon }: Props) => {
  return (
    <StyledDiv>
      <img src={icon} width={25} height={25} alt="Image icon" />
    </StyledDiv>
  );
};

export default Icons;
