import React from "react";

import { useFormik } from "formik";

import { toast } from "@/utils/toast";
import { ContactFormTypes } from "@/modules/Contact/contact-form.types";
import { contactSchema } from "@/modules/Contact/contact.schema";

import InputField from "../InputField";
import InputTextArea from "../InputTextArea";
import Button from "../Button";
import { StyledDiv } from "./style";

export interface ContactFormProps {
  initialValues?: ContactFormTypes;
  onSubmit?: (values: ContactFormTypes) => void;
  // Add any other props your component might need
}

const ContactForm: React.FC<ContactFormProps> = ({
  initialValues,
  onSubmit,
  ...props
}) => {
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
    onSubmit: async (value) => {
      const { name, email, message } = value;
      setIsLoading(true);

      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 1e3);

      fetch("/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((res) => {
          if (!res.ok) {
            throw "";
          }
          toast("Message sent successfully!", "success");
        })
        .catch((err) => {
          toast("Something went wrong. Try again later", "failed");
        })
        .finally(() => {
          setIsLoading(false);
        });
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

        <Button skin="contained" disabled={isLoading} loader={isLoading}>
          SUBMIT
        </Button>
      </form>
    </StyledDiv>
  );
};

export default ContactForm;
