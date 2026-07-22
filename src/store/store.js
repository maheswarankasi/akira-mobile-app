import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import cartReducer, { cartStorageMiddleware } from "./cartSlice";
import shopReducer from "./shopSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer,
    shop: shopReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartStorageMiddleware),
});
