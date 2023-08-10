import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cart";
import { toast } from "react-toastify";
function SingleProduct({ product }) {

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const action = addToCart({...product,quantity: 1});
    dispatch(action);
    toast.success(`${product.productName} added to the cart`);
  }
  return (
    <div className="product">
      <img src={product.imageURL} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>₹{product.price}/kg</p>
      <button onClick={handleAddToCart} className="success btn">
        <i className="fa fa-shopping-cart"></i> Add to cart
      </button>
    </div>
  );
}
export default SingleProduct;
