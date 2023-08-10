import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cart";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { getSingleProduct } from "../services/products";
import { Helmet } from "react-helmet-async";

function Product() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { productSlug } = useParams();
  const [quantity, setQuantity] = useState(1);

  const fetchProduct = async () => {
    try {
      const response = await getSingleProduct(productSlug);
      const data = response.data;
      if (data.length) {
        setProduct(data[0]);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const increseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const action = addToCart({ ...product, quantity: quantity });
    dispatch(action);
    toast.success(`${product.productName} added to the cart`);
  };

  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <Header title="PRODUCT" />
      <div className="row wrapper product-detail-container">
        <div className="col-6">
          <img src={product.imageURL} alt={product.productName} />
        </div>

        <div className="col-6 product-detail">
          <div>
            <h1>{product.productName}</h1>
            <p>{product.productDetail}</p>
            <p>₹{product.price}/kg</p>
            <div className="quantity-input">
              <button onClick={decreseQuantity} className="btn default">
                <i className="fa fa-minus"></i>
              </button>
              <input
                onChange={(e) => setQuantity(Number(e.target.value))}
                type="number"
                value={quantity}
              />
              <button onClick={increseQuantity} className="btn default">
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <button onClick={handleAddToCart} className="success btn">
              <i className="fa fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
