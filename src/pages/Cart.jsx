import Header from "../components/Header";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.subTotal);
  // const cartItems = [
  //   {
  //     productName: "Strawberry",
  //     productPrice: 50,
  //     productImage: "/src/assets/images/product-img-1.jpg",
  //     quantity: 4,
  //     totalPrice: 200,
  //   },
  //   {
  //     productName: "Berry",
  //     productPrice: 60,
  //     productImage: "/src/assets/images/product-img-2.jpg",
  //     quantity: 2,
  //     totalPrice: 120,
  //   },
  // ];

  const cartItemsJSX = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} item={cartItem} />
  ));

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Header title="Cart" />
      {cartItems.length > 0 ? (
        <div className="cart-container wrapper row">
          <div className="cart-products">{cartItemsJSX}</div>
          <div className="cart-subtotals">
            <div>
              <div className="cart-subtotal">
                <h3>Subtotal</h3>
                <p>₹{subTotal}</p>
              </div>
              <div className="cart-checkout-btn-container">
                <Link to={"/checkout"}>
                  <button className="btn success">CHECKOUT</button>
                </Link>
              </div>
              <div className="cart-continue-shopping-container">
                <Link to="/">CONTINUE SHOPPING</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="empty-cart-message">
          Your cart is empty! Sounds like a good time to{" "}
          <Link to={"/"}> start shopping. </Link>
        </p>
      )}
    </>
  );
}
export default Cart;
