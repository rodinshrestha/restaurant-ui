import React from "react";

import clsx from "clsx";

import RowWrapper from "./style";

export type RowType = "row" | "noGutter";

export type RowProps = {
  children?: React.ReactNode;
  noGutter?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

const Row = ({
  noGutter = false,
  children,
  className,
  id,
  style,
}: RowProps) => {
  return (
    <RowWrapper
      className={clsx("row", className, { "no-gutter": !!noGutter })}
      style={style}
      id={id}
    >
      {children}
    </RowWrapper>
  );
};

export default React.memo(Row);
