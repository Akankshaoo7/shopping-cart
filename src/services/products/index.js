import {api} from "../http-client";

export const getProducts = () => {
    return api.get("/products.json");
};
export const getSingleProduct = (productSlug) => {
    return api.get(`/products.json?slug=${productSlug}`);
}