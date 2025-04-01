import React from "react";

import clsx from "clsx";

import { StyledButton, StyledLink } from "./style";

type Props = {
  label?: string;
  skin: "contained" | "outline";
  rel?: string;
  children: React.ReactNode;
  href?: string;
  alt?: string;
  className?: string;
  size?: "md" | "sm" | "lg";
  disabled?: boolean;
  loader?: boolean;
  onClick?: () => void;
};

const Button = ({
  label,
  skin,
  href,
  className,
  rel,
  children,
  size,
  disabled,
  loader,
  onClick,
}: Props) => {
  if (href) {
    return (
      <StyledLink>
        <a
          href={href}
          className={clsx(className, skin, size)}
          aria-label={label || "link-button"}
          rel={rel}
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
    >
      {children}
    </StyledButton>
  );
};

export default Button;
