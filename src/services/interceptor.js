import { useNavigate } from "react-router-dom";
import storage from "../utils/storage";
import { toast } from "react-toastify";
import { api,auth } from "./http-client";

const interceptor = () => {
    const navigate = useNavigate();
    const initInterceptor = () => {
        // Add a request interceptor
        api.interceptors.request.use(
          (config) => {
            const ud = storage.getItem("ud");
            const idToken = ud ? ud.idToken : null;
            config.params = {
              auth: idToken,
            };
            return config;
          },
          function (error) {
            // Do something with request error
            return Promise.reject(error);
          }
        );
      
        api.interceptors.response.use(
          (response) => {
            // Handle successful responses
            return response;
          },
          (error) => {
            // Handle error responses
            if (error.response.status === 401) {
              toast.error("Session has been expired");
              navigate("/login");
            }
            return Promise.reject(error);
          }
        );
      
         // Add a request interceptor
         auth.interceptors.request.use(
          (config) => {
            return config;
          },
          function (error) {
            // Do something with request error
            return Promise.reject(error);
          }
        );
      
        auth.interceptors.response.use(
          (response) => {
            // Handle successful responses
            return response;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
    };
    return initInterceptor;
}

export default interceptor;
