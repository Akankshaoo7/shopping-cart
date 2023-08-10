import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Header title="Sign Up" />
      <div className="wrapper row">
        <div className="col-12">
          <div className="form-container auth-form">
            <RegisterForm/>
            <div className="divider"></div>
            <p>I already have an account! <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
