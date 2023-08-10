import Header from "../components/Header";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { Helmet } from "react-helmet-async";
export default function Register() {
  return (
    <div>
       <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Header title="Forgot Password" />
      <div className="wrapper row">
        <div className="col-12">
          <div className="form-container auth-form">
            <ForgotPasswordForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
