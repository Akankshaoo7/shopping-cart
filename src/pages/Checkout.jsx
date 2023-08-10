import { Link, useNavigate } from "react-router-dom";
import SummaryItem from "../components/SummeryItem";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { placeOrder } from "../services/checkout";
import { toast } from "react-toastify";
import { emptyCart } from "../store/actions/cart";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const shipping = useSelector((state) => state.cart.shipping);
  const total = useSelector((state) => state.cart.total);
  const userDetail = useSelector((state) => state.auth.ud);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
      toast.error("Cart is empty");
    }
  }, []);
  const cartItemsJSX = cartItems.map((cartItem) => (
    <SummaryItem key={cartItem.id} item={cartItem} />
  ));
  const checkoutFormSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .max(70, "First name must be at most 70 characters")
      .required("First name is a required field"),

    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .max(70, "Last name must be at most 70 characters")
      .required("Last name is a required field"),

    email: Yup.string()
      .email("Email must be a valid")
      .required("Email address is a required field"),

    phone: Yup.string()
      .max(10, "Invalid phone number")
      .min(10, "Invalid phone number"),

    address: Yup.string().required("Address is a required"),

    city: Yup.string().required("City is a required"),

    state: Yup.string().required("State is a required"),

    postalCode: Yup.string()
      .length(6, "Postal Code is a invalid")
      .matches(/^[0-9]{6}/, "Postal Code is a invalid")
      .required("Postal Code is a required"),

    country: Yup.string().required("Country is a required"),
  });
  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    const orderData = {
      userId: userDetail.localId,
      contactInformation: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      },
      shippingAddress: {
        address: values.address,
        apartment: values.apartment,
        city: values.city,
        state: values.state,
        postalCode: values.postalCode,
        country: values.country,
      },
      cartItems: cartItems,
      subTotal: subTotal,
      shipping: shipping,
      total: total,
    };
    try {
      const response = await placeOrder(orderData);
      setSubmitting(false);
      resetForm();
      const action = emptyCart();
      dispatch(action);
      toast.success("Your order has been placed successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <div className="wrapper">
        <div className="section-one">
          <h3>Checkout</h3>
          <Link to="/cart">back to cart</Link>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            apartment: "",
            city: "",
            state: "",
            postalCode: "",
            country: "India",
          }}
          onSubmit={handleOnSubmit}
          validationSchema={checkoutFormSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="contact">
                <div className="checkout-form-title">
                  <h2>CONTACT INFORMATION</h2>
                </div>
                <div className="form">
                  <div className="checkout-form-input-fields">
                    <div>
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="firstName"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="lastName"
                      />
                    </div>
                  </div>

                  <div className="checkout-form-input-fields">
                    <div>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                      />
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="email"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone(optional)"
                      />
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shipping">
                <div className="checkout-form-title">
                  <h2>SHIPPING</h2>
                </div>
                <div className="form">
                  <div className="checkout-form-input-fields">
                    <div>
                      <Field
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                      />
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="address"
                      />
                    </div>
                  </div>
                  <div className="checkout-form-input-fields">
                    <div>
                      <Field
                        type="text"
                        name="apartment"
                        placeholder="Apt num, Suite (optional)"
                      />
                    </div>
                  </div>
                  <div className="checkout-form-input-fields">
                    <div>
                      <Field
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                      />
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="city"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="state"
                        id="state"
                        placeholder="State / Province"
                      />
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="state"
                      />
                    </div>
                  </div>
                  <div className="checkout-form-input-fields">
                    <div>
                      <Field
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="Zip / Postal Code"
                      />
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="postalCode"
                      />
                    </div>
                    <div>
                      <Field as="select" name="country">
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="China">China</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Iran">Iran</option>
                        <option value="Japan">Japan</option>
                        <option value="Korea">Korea</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </Field>
                      <ErrorMessage
                        className="error-message"
                        component="div"
                        name="country"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="summary">
                <div className="checkout-form-title">
                  <h2>SUMMARY</h2>
                </div>
                {cartItemsJSX}
                <div>
                  <div className="summary-subtotal">
                    <p>Subtotal</p>
                    <p>₹{subTotal}</p>
                  </div>
                  <div className="summary-subtotal">
                    <p>Shipping</p>
                    <p>₹{shipping}</p>
                  </div>
                </div>
                <div className="summary-subtotal">
                  <p>Total</p>
                  <p>₹{total}</p>
                </div>
                <div className="checkout-btns">
                  <button
                    className="success btn"
                    type="submit"
                    style={{ width: 120 }}
                  >
                    {isSubmitting ? (
                      <i className="fa fa-circle-o-notch fa-spin"></i>
                    ) : (
                      "Order Now"
                    )}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
