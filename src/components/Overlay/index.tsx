import clsx from "clsx";

import StyledDiv from "./style";

interface IProps {
  className?: string;
  position?: string;
  color?: string /* hex color only */;
  opacity?: number;
  zIndex?: number;
  testId?: string;
}

const Overlay = ({
  className,
  color,
  opacity,
  zIndex,
  position,
  testId,
}: IProps) => (
  <StyledDiv
    id="overlay"
    data-testid={testId || "overlay"}
    className={clsx("bg-overlay", className)}
    $color={color}
    $zIndex={zIndex}
    $position={position}
    $opacity={opacity}
  />
);

export default Overlay;
