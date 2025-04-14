import React from "react";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import InputTextArea from "@/components/InputTextArea";

import { StyledDiv } from "./style";

type Props = {
  btnLabel?: string;
  btnColor?: string;
  btnBgColor?: string;
};

const ContactDetailForm = ({ btnLabel, btnBgColor, btnColor }: Props) => {
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    message: false,
  });
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValue.email || !formValue.message || !formValue.name) {
      setErrors({
        name: !formValue.name,
        email: !formValue.email,
        message: !formValue.message,
      });
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setFormValue({
        name: "",
        email: "",
        message: "",
      });
    }, 1e3);
  };

  return (
    <StyledDiv className="form-wrapper">
      <form className="form-inner-wrapper" onSubmit={handleSubmit}>
        <div className="col-6">
          <InputField
            name="name"
            placeholder="your name"
            label="Name"
            value={formValue.name}
            touched={true}
            error={errors.name}
            errorMsg="Name is required"
            onChange={handleOnChange}
          />
        </div>

        <div className="col-6">
          <InputField
            name="email"
            placeholder="email@exmaple.com"
            label="Email"
            touched={true}
            value={formValue.email}
            error={errors.email}
            errorMsg="Email should be valid and cannot be empty"
            onChange={handleOnChange}
          />
        </div>

        <div className="col-12">
          <InputTextArea
            id="message"
            name="message"
            placeholder="Food is...."
            label="Message"
            rows={20}
            cols={2}
            error={errors.message}
            touched={true}
            errorMsg="Message is required"
            onChange={handleOnChange}
            value={formValue.message}
          />
        </div>

        <Button
          skin="contained"
          disabled={isLoading}
          loader={isLoading}
          bgColor={btnBgColor}
          color={btnColor}
        >
          {btnLabel}
        </Button>
      </form>
    </StyledDiv>
  );
};

export default ContactDetailForm;
