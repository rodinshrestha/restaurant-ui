import React from "react";

import clsx from "clsx";

import ColWrapper from "./style";

export type ColumnType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export type ColProps = {
  children?: React.ReactNode;
  className?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  xxxl?: number;
};

const Col = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
  className,
}: ColProps) => {
  return (
    <ColWrapper
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      $xxl={xxl}
      $xxxl={xxxl}
      className={clsx("col", className)}
    >
      {children}
    </ColWrapper>
  );
};

export default React.memo(Col);
