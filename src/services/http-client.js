import axios from "axios";
const api = axios.create({
  baseURL: "https://shopping-cart-bd8b8-default-rtdb.firebaseio.com",
});
const auth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  params: {
    key: import.meta.env.VITE_FIREBASE_API_KEY,
  },
});

export { api, auth };
