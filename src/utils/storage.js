import { EncryptStorage } from "encrypt-storage";

export default new EncryptStorage(
  import.meta.env.VITE_ENCRYPT_STORAGE_SECRET_KEY
);
