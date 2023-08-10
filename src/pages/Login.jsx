import Header from "../components/Header";
import LoginFrom from "../components/LoginForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Header title="Log In" />
      <div className="wrapper row">
        <div className="col-12">
          <div className="form-container auth-form">
            <LoginFrom />
            <div className="divider"></div>
            <p>
              Need an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
