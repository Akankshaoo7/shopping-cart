import storage from "../../utils/storage";
let cartItems = storage.getItem("ci");
cartItems = cartItems || {
  items: [],
  subTotal: 0,
  shipping: 50,
  total: 0,
};
const initialState = cartItems;

const cartReducer = (state = initialState, action) => {
  let updatedState = null;
  let cartItem = null;
  switch (action.type) {
    case "ADD_TO_CART":
      const product = { ...action.payload };
      product.totalPrice = product.quantity * product.price;

      cartItem = state.items.find((item) => {
        if (item.id === product.id) {
          return true;
        } else {
          return false;
        }
      });

      if (cartItem) {
        const items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity = item.quantity + product.quantity;
            item.totalPrice = item.totalPrice + product.totalPrice;
          }
          return item;
        });
        updatedState = {
          ...state,
          items: items,
          subTotal: state.subTotal + product.totalPrice,
          total: state.subTotal + product.totalPrice + state.shipping,
        };
      } else {
        updatedState = {
          ...state,
          items: [...state.items, product],
          subTotal: state.subTotal + product.totalPrice,
          total: state.subTotal + product.totalPrice + state.shipping,
        };
      }
      break;
    case "REMOVE_FROM_CART":
      cartItem = state.items.find((item) => {
        if (item.id === action.payload) {
          return true;
        } else {
          return false;
        }
      });
      updatedState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        subTotal: state.subTotal - cartItem.totalPrice,
        total: state.subTotal - cartItem.totalPrice + state.shipping,
      };
      break;
    case "UPDATE_QUANTITY":
      cartItem = { ...action.payload };
      cartItem.totalPrice = cartItem.quantity * cartItem.price;
      const items = state.items.map((item) => {
        if (item.id === cartItem.id) {
          return cartItem;
        }
        return item;
      });
      const subTotal = items.reduce((currentValue, item) => {
        return currentValue + item.totalPrice;
      }, 0);
      updatedState = {
        ...state,
        items: items,
        subTotal: subTotal,
        total: state.subTotal + cartItem.totalPrice + state.shipping,
      };
      break;
    case "EMPTY_CART":
      updatedState = {
        ...state,
        items: [],
        subTotal:0,
        total:0
      }
      break;
    default:
      updatedState = state;
      break;
  }
  storage.setItem("ci", updatedState);
  return updatedState;
};

export default cartReducer;
