export const addToCart = (cartItem) => {
    return {
        type:"ADD_TO_CART",
        payload: cartItem
    };
};

export const removeFromCart = (productId) => {
    return {
        type:"REMOVE_FROM_CART",
        payload: productId
    };
};

export const updateQuantity = (cartItem) => {
    return {
        type:"UPDATE_QUANTITY",
        payload: cartItem
    };
};

export const emptyCart = () => {
    return {
        type:"EMPTY_CART"
    };
};