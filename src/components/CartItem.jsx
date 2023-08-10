import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/actions/cart";
import { useState } from "react";
function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  const setItemQuantity = (e) => {
    const quantity = Number(e.target.value);
    if (quantity > 0) {
      setQuantity(quantity);
      const action = updateQuantity({ ...item, quantity: quantity });
      dispatch(action);
    } else {
      handleRemoveFromCart();
    }
  };

  const increseQuantity = () => {
    setQuantity(quantity + 1);
    const action = updateQuantity({ ...item, quantity: quantity + 1 });
    dispatch(action);
  };

  const decreseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      const action = updateQuantity({ ...item, quantity: quantity - 1 });
      dispatch(action);
    } else {
      handleRemoveFromCart();
    }
  };

  const handleRemoveFromCart = () => {
    const action = removeFromCart(item.id);
    dispatch(action);
  };
  
  return (
    <>
      <div>
        <div className="cart-product">
          <div className="cart-product-left">
            <img className="cart-image" src={item.imageURL}></img>
            <div>
              <p>{item.productName}</p>
              <p>₹{item.price}/kg</p>
            </div>
          </div>
          <div className="cart-product-right">
            <div className="quantity-input">
              <button onClick={decreseQuantity} className="btn default">
                <i className="fa fa-minus"></i>
              </button>
              <input
                onChange={setItemQuantity}
                type="number"
                value={quantity}
              />
              <button onClick={increseQuantity} className="btn default">
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <p className="cart-price">₹{item.totalPrice}</p>
            <div
              onClick={handleRemoveFromCart}
              className="fa fa-times-circle remove-item"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItem;
