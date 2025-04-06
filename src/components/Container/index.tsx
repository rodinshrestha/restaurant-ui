import React from "react";

import clsx from "clsx";
import { CSSProperties } from "styled-components";

import ContainerWrapper from "./style";

export type ContainerType = "normal" | "fluid";

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
  id?: string;
  style?: CSSProperties;
};

export const Container = ({
  className,
  children,
  fluid = false,
  id = "",
  style,
}: ContainerProps) => {
  return (
    <ContainerWrapper
      className={clsx(className, {
        "container-fluid": fluid,
        container: !fluid,
      })}
      $container={fluid ? "fluid" : "normal"}
      id={id}
      style={style}
    >
      {children}
    </ContainerWrapper>
  );
};
