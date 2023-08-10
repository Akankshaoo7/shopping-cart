import { api } from "../http-client";

const sendEmail = (data) => {
  return api.post(`/contact-forms.json`, data);
};

export { sendEmail };
