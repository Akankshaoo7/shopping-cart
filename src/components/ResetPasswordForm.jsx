import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSearchParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { resetPassword } from "../services/auth";
import { toast } from "react-toastify";

const resetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is a required field"),

  confirmPassword: Yup.string()
    .required("Confirm Password is a required field")
    .oneOf([Yup.ref("newPassword")], "Password must match"),
});

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = { ...values };
    delete formData.confirmPassword;
    try {
      await resetPassword(formData);
      setSubmitting(false);
      resetForm();
      toast.success("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };
  return (
    <Formik
      initialValues={{
        newPassword: "",
        oobCode:oobCode,
        confirmPassword:""
      }}
      onSubmit={handleOnSubmit}
      validationSchema={resetPasswordSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="newPassword">New Password</label>
          <Field
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
          />
          <ErrorMessage
            className="error-message"
            component="div"
            name="newPassword"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <ErrorMessage
            className="error-message"
            component="div"
            name="confirmPassword"
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
