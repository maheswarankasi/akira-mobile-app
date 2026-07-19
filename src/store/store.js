import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import cartReducer, { cartStorageMiddleware } from "./cartSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartStorageMiddleware),
});
