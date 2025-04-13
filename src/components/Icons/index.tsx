import { StyledDiv } from "./style";

type Props = {
  icon: string;
  testId?: string;
  width?: number;
  height?: number;
  iconAltTest?: string;
};

const Icons = ({
  icon,
  testId,
  width = 25,
  height = 25,
  iconAltTest = "Icon Image",
}: Props) => {
  return (
    <StyledDiv>
      <img
        src={icon}
        width={width}
        height={height}
        alt={iconAltTest}
        data-testid={testId || "icon-test-id"}
      />
    </StyledDiv>
  );
};

export default Icons;
