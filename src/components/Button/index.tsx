import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import { StyledButton, StyledLink } from "./style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** The visual style of the button */
  skin?: "contained" | "outline";
  /** The size of the button */
  size?: "sm" | "md" | "lg";
  /** URL to navigate to when clicked. If provided, renders as an anchor tag */
  href?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Shows the loader for async request */
  loader?: boolean;
  /** Id for the button */
  id?: string;
  /** Override button background color */
  bgColor?: string;
  /** Override button text color */
  color?: string;
  /** handle click event */
  onClick?: () => void;
  /** Custom css class name for additional styling */
  className?: string;
  /** Aria label */
  label?: string;
  /** Custom test id */
  testId?: string;
}

const Button = ({
  label,
  skin,
  href,
  className,
  children,
  size,
  disabled,
  loader,
  onClick,
  bgColor,
  color,
  testId,
}: ButtonProps) => {
  if (href) {
    return (
      <StyledLink id="link-button" bgcolor={bgColor} color={color}>
        <a
          href={href}
          className={clsx(className, skin, size)}
          aria-label={label || "link-button"}
          data-testid={testId}
        >
          {children}
        </a>
      </StyledLink>
    );
  }

  return (
    <StyledButton
      className={clsx(className, skin, size, { disabled, isLoading: loader })}
      disabled={disabled}
      onClick={onClick}
      id="button"
      bgcolor={bgColor}
      color={color}
      data-testid={testId}
    >
      {loader ? "Loading..." : children}
    </StyledButton>
  );
};

export default Button;
