import { auth } from "../http-client";
import storage from "../../utils/storage";
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const register = (data) => {
  return auth.post(`/accounts:signUp`, data);
};

const login = (data) => {
  return auth.post(`/accounts:signInWithPassword`, data);
};

const logout = () => {
  storage.removeItem("ud");
};

const getAuthUser = () => {
  return storage.getItem("ud");
};

const sendRestPasswordResetEmail = (data) => {
  return auth.post(`/accounts:sendOobCode`, data);
};

const resetPassword = (data) => {
  return auth.post(`/accounts:resetPassword`, data);
};

export {
  register,
  login,
  getAuthUser,
  logout,
  resetPassword,
  sendRestPasswordResetEmail,
};
