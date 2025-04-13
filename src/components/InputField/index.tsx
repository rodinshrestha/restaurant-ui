import React from "react";

import clsx from "clsx";

import { InputStyle, StyledDiv } from "./style";

type Props = {
  name: string;
  placeholder: string;
  value: string;
  label?: string;
  className?: string;
  error?: boolean;
  touched?: boolean;
  disabled?: boolean;
  errorMsg?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const InputField = ({
  label,
  className,
  error,
  value,
  touched,
  disabled,
  placeholder,
  name,
  errorMsg,
  ...props
}: Props) => {
  const isError = error && touched;

  return (
    <StyledDiv className={clsx({ error: isError })}>
      {label && (
        <label htmlFor={label} className="label-wrapper">
          {label}
        </label>
      )}

      <div className="input-wrap">
        <InputStyle
          className={clsx(className, {
            error: !!isError,
            disabled: disabled,
          })}
          value={value}
          placeholder={placeholder}
          name={name}
          type="text"
          {...props}
        />

        {errorMsg && isError && <p className="error-msg">{errorMsg}</p>}
      </div>
    </StyledDiv>
  );
};

export default InputField;
