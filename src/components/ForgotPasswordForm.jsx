import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { sendRestPasswordResetEmail } from "../services/auth";
import { toast } from "react-toastify";

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid")
    .required("Email address is a required field"),
});

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = { ...values };
    try {
      await sendRestPasswordResetEmail(formData);
      setSubmitting(false);
      resetForm();
      toast.success("Reset password email has been sent successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        requestType: "PASSWORD_RESET",
      }}
      onSubmit={handleOnSubmit}
      validationSchema={forgotPasswordSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="email">Email Address</label>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            autoComplete="off"
          />
          <ErrorMessage
            className="error-message"
            component="div"
            name="email"
          />
          <button
            type="submit"
            className="success btn"
            disabled={isSubmitting}
            style={{ width: 100 }}
          >
            {isSubmitting ? (
              <i className="fa fa-circle-o-notch fa-spin"></i>
            ) : (
              "Send"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
