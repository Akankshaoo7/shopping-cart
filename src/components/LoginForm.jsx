import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../services/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../store/actions/auth";
import storage from "../utils/storage";

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid field")
    .required("Email address is a required field"),
  password: Yup.string().required("Password is a required field"),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = { ...values, returnSecureToken: true };
    try {
      const response = await login(formData);
      storage.setItem("ud", response.data);
      const action = setUserDetail(response.data);
      dispatch(action);
      setSubmitting(false);
      resetForm();
      console.log(from)
      navigate(from, { replace: true });
      toast.success("Sign in Successfully!");
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleOnSubmit}
      validationSchema={loginFormSchema}
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
          <div className="login-button-container">
            <button
              type="submit"
              className="success btn"
              disabled={isSubmitting}
              style={{ width: 100 }}
            >
              {isSubmitting ? (
                <i className="fa fa-circle-o-notch fa-spin"></i>
              ) : (
                "Login"
              )}
            </button>

            <Link to="/forgot-password">Forgot Password</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
