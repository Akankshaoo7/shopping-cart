import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { sendEmail } from "../services/contact-form";
const contactFormSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(70, "First name must be at most 70 characters")
    .required("First name is a required field"),

  lastname: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(70, "Last name must be at most 70 characters")
    .required("Last name is a required field"),

  email: Yup.string()

    .email("Email must be a valid")

    .required("Email address is a required field"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is a required field"),
});

export default function ContactForm() {
  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = { ...values };
    try {
      await sendEmail(formData);
      setSubmitting(false);
      resetForm();
      toast.success("Email has been sent Successfully!");
    } catch (error) {
      if (error.response.status !== 401) {
        toast.error(error.response.data.error.message || error.response.data.error);
      }
    }
  };
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      }}
      onSubmit={handleOnSubmit}
      validationSchema={contactFormSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="fname">First Name</label>
          <Field
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <ErrorMessage
            className="error-message"
            component="div"
            name="firstname"
          />
          <label htmlFor="lname">Last Name</label>
          <Field
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <ErrorMessage
            className="error-message"
            component="div"
            name="lastname"
          />

          <label htmlFor="email">Email Id</label>
          <Field type="email" id="email" name="email" placeholder="Email Id" />
          <ErrorMessage
            className="error-message"
            component="div"
            name="email"
          />

          <label htmlFor="message">Message</label>
          <Field
            className="text"
            id="message"
            name="message"
            as="textarea"
            placeholder="Write something.."
          />
          <ErrorMessage
            className="error-message"
            component="div"
            name="message"
          />

          <button type="submit" className="success btn" style={{ width: 100 }}>
            {isSubmitting ? (
              <i className="fa fa-circle-o-notch fa-spin"></i>
            ) : (
              "Submit"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
