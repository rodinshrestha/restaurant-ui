import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

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

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  bgcolor?: string;
  color?: string;
  "data-testid"?: string;
};

const Button = ({
  label,
  skin = "contained",
  href,
  className,
  children,
  size = "md",
  disabled,
  loader,
  onClick,
  bgColor,
  color,
  testId,
  ...props
}: ButtonProps) => {
  const buttonClasses = clsx(skin, size, className, {
    disabled,
    isLoading: loader,
  });

  if (href) {
    const linkProps: LinkProps = {
      href,
      className: buttonClasses,
      bgcolor: bgColor,
      color,
      "data-testid": testId,
      "aria-label": label,
      ...(props as AnchorHTMLAttributes<HTMLAnchorElement>),
    };
    return <StyledLink {...linkProps}>{children}</StyledLink>;
  }

  return (
    <StyledButton
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      bgcolor={bgColor}
      color={color}
      data-testid={testId}
      aria-label={label}
      {...props}
    >
      {loader ? "Loading..." : children}
    </StyledButton>
  );
};

export default Button;
