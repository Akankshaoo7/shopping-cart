import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Header title="404" />
      <div className="wrapper">
        <div style={{textAlign:'center',fontSize:20}}>Opps page not found</div>
      </div>
    </div>
  );
}
export default ErrorPage;
