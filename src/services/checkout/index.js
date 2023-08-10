import {api} from "../http-client";

const placeOrder = (data) => {
    return api.post(`/orders.json`,data);
}

export {placeOrder};