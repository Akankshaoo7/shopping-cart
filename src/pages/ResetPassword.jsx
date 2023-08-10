import Header from "../components/Header";
import ResetPasswordForm from "../components/ResetPasswordForm";
import { Helmet } from "react-helmet-async";
export default function ResetPassword() {
  return (
    <div>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Header title="Reset Password" />
      <div className="wrapper row">
        <div className="col-12">
          <div className="form-container auth-form">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
}
