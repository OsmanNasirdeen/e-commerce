import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../src/features/cart/cartSlice";
import productReducer from "../src/features/products/ProductSlice";
export const store = configureStore({
  reducer: {
    store: productReducer,
  },
});
