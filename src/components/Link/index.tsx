import React, { ReactNode } from "react";

import { FrameworkType } from "@/types/framework.types";
import { getLinkAttributes } from "@/utils/get-link-attributes";

export type LinkProps = {
  to: string;
  framework: FrameworkType;
  LinkComponent?: any;
  children: ReactNode;
  testId?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = (props: LinkProps) => {
  const { to, LinkComponent, children, testId, framework, ...rest } = props;

  // If it's not an anchor and no LinkComponent is provided, fallback to anchor
  const FinalLinkComponent = LinkComponent || "a";

  const componentProps = {
    [getLinkAttributes(framework)]: to,
    ...rest,
  };

  return (
    <FinalLinkComponent {...componentProps} data-testid={testId}>
      {children}
    </FinalLinkComponent>
  );
};

export default Link;
