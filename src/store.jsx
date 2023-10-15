import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/features/products/ProductSlice";
export const store = configureStore({
  reducer: {
    store: productReducer,
  },
});
