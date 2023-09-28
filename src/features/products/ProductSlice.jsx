import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  productsLength: 0,
  Loading: false,
  cartProducts: [],
  cartLength: 0,
  cartTotalAmount: 0,
};

export const getProducts = createAsyncThunk("products/getProducts", () => {
  return fetch(import.meta.env.VITE_PRODUCTS_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
const productSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const productInCart = state.cartProducts.find((item) => {
        return item._id === product._id;
      });
      if (productInCart) {
        productInCart.amount++;
        state.cartLength += 1;
      } else {
        state.cartProducts.push({ ...product, amount: 1 });
        state.cartLength += 1;
      }
    },
    removeFromCart: (state, action) => {
      const productID = action.payload;
      const product = state.cartProducts.find((item) => {
        return item._id === productID;
      });
      state.cartProducts = state.cartProducts.filter((item) => {
        return item._id !== productID;
      });
      state.cartLength -= product.amount;
    },
    increaseQuantity: (state, action) => {
      const productID = action.payload;
      const product = state.cartProducts.find((item) => {
        return item._id === productID;
      });
      product.amount += 1;
      state.cartLength += 1;
    },
    decreaseQuantity: (state, action) => {
      const productID = action.payload;
      const product = state.cartProducts.find((item) => {
        return item._id === productID;
      });
      product.amount -= 1;
      state.cartLength -= 1;
    },
    calculateTotalCart: (state) => {
      let total = 0;
      state.cartProducts.forEach((product) => {
        total += product.price.$numberDecimal * product.amount;
      });
      state.cartTotalAmount = total;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.Loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.Loading = false;
      console.log(action);
      state.products = action.payload.products;
      state.productsLength = state.products.length;
    },
    [getProducts.rejected]: (state) => {
      state.Loading = false;
      console.log(action);
      state.products = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalCart,
} = productSlice.actions;

export default productSlice.reducer;
