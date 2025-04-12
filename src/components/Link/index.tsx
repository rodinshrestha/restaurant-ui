import React, { ElementType, ReactNode } from "react";

export type LinkProps = {
  to: string;
  LinkComponent?: any;
  children: ReactNode;
  testId?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = (props: LinkProps) => {
  const { to, LinkComponent, children, testId, ...rest } = props;
  const Component = (LinkComponent || "a") as ElementType;
  const isAnchor = Component === "a";

  // If it's not an anchor and no LinkComponent is provided, fallback to anchor
  const FinalComponent = isAnchor ? Component : LinkComponent || "a";

  const componentProps = {
    [isAnchor ? "href" : "to"]: to,
    ...rest,
  };

  return (
    <FinalComponent {...componentProps} data-testid={testId}>
      {children}
    </FinalComponent>
  );
};

export default Link;
