import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../services/auth";
import { toast } from "react-toastify";

const registerFormSchema = Yup.object().shape({
  // firstname: Yup.string()
  //   .min(2, "First name must be at least 2 characters")
  //   .max(70, "First name must be at most 70 characters")
  //   .required("First name is a required field"),

  // lastname: Yup.string()
  //   .min(2, "Last name must be at least 2 characters")
  //   .max(70, "Last name must be at most 70 characters")
  //   .required("Last name is a required field"),

  email: Yup.string()
    .email("Email must be a valid")
    .required("Email address is a required field"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is a required field"),

  confirmPassword: Yup.string()
    .required("Confirm Password is a required field")
    .oneOf([Yup.ref("password")], "Password must match"),
});

export default function RegisterForm() {
  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = { ...values, returnSecureToken: false };
    delete formData.confirmPassword;
    try {
      await register(formData);
      setSubmitting(false);
      resetForm();
      toast.success("Sign up Successfully!");
    } catch (error) {
      if (error.response.data.error.message === 'EMAIL_EXISTS') {
        toast.error("Email already exists!");
      } else {
        toast.error(error.response.data.error.message);
      }
    }
  };
  return (
    <Formik
      initialValues={{
        // firstname: "",
        // lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={handleOnSubmit}
      validationSchema={registerFormSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          {/* <label htmlFor="fname">First Name</label>
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
          /> */}

          <label htmlFor="email">Email Address</label>
          <Field
            type="email"
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

          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage
            className="error-message"
            component="div"
            name="password"
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
              "Sign Up"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}
