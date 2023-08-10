import Header from "../components/Header";
import fruits from "../assets/images/fruits.jpg";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Header title="Contact Us" />
      <div className="wrapper row contact-us">
        <div className="col-6">
          <p style={{ marginTop: 0 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos
            iure illum saepe, fugit, dignissimos quae dicta error sunt hic
            deleniti animi quibusdam alias itaque blanditiis, vel sit aliquam!
            Earum.
          </p>
          <img src={fruits} alt="Product Detail" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos
            iure illum saepe, fugit, dignissimos quae dicta error sunt hic
            deleniti animi quibusdam alias itaque blanditiis, vel sit aliquam!
            Earum.
          </p>
        </div>
        <div className="col-6">
          <div className="form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
