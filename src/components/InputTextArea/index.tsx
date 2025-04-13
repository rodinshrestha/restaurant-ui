import React from "react";

import clsx from "clsx";

import { InputTextAreaStyle, StyledDiv } from "./style";

type Props = {
  id: string;
  name: string;
  rows: number;
  cols: number;
  value: string;
  placeholder: string;
  label?: string;
  className?: string;
  error?: boolean;
  touched?: boolean;
  disabled?: boolean;
  errorMsg?: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;
const InputTextArea = ({
  label,
  id,
  className,
  error,
  touched,
  disabled,
  placeholder,
  value,
  name,
  rows,
  cols,
  errorMsg,
  ...props
}: Props) => {
  const isError = error && touched;

  return (
    <StyledDiv className={clsx({ error: isError })}>
      {label && (
        <label htmlFor={id} className="label-wrapper">
          {label}
        </label>
      )}

      <div className="input-wrap">
        <InputTextAreaStyle
          id={id}
          value={value}
          className={clsx(className, {
            error: !!isError,
            disabled: disabled,
          })}
          placeholder={placeholder}
          name={name}
          rows={rows}
          cols={cols}
          {...props}
        />
      </div>
      {errorMsg && isError && <p className="error-msg">{errorMsg}</p>}
    </StyledDiv>
  );
};

export default InputTextArea;
