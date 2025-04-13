import React from "react";

import { useFormik } from "formik";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import InputTextArea from "@/components/InputTextArea";

import { StyledDiv } from "./style";
import { contactSchema } from "./contact.schema";
import { ContactFormTypes } from "./contact-form.types";

type Props = {
  btnLabel?: string;
  btnColor?: string;
  btnBgColor?: string;
};

const ContactDetailForm = ({ btnLabel, btnBgColor, btnColor }: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik<ContactFormTypes>({
    initialValues: {
      email: "",
      message: "",
      name: "",
    },
    enableReinitialize: true,
    validationSchema: contactSchema,
    validateOnMount: true,
    onSubmit: async () => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1e3);
    },
  });
  return (
    <StyledDiv className="form-wrapper">
      <form className="form-inner-wrapper" onSubmit={formik.handleSubmit}>
        <div className="col-6">
          <InputField
            name="name"
            placeholder="your name"
            label="Name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            touched={formik.touched.name}
            error={!!formik.errors.name}
            errorMsg={formik.errors.name}
            onChange={formik.handleChange}
          />
        </div>

        <div className="col-6">
          <InputField
            name="email"
            placeholder="email@exmaple.com"
            label="Email"
            touched={formik.touched.email}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={!!formik.errors.email}
            errorMsg={formik.errors.email}
            onChange={formik.handleChange}
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
            onBlur={formik.handleBlur}
            touched={formik.touched.message}
            error={!!formik.errors.message}
            errorMsg={formik.errors.message}
            onChange={formik.handleChange}
            value={formik.values.message}
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
