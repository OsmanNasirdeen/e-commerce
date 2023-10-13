import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/logIn/LogIn";
import HomePage from "./pages/Homepage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import CartPage from "./pages/CartPage/CartPage";
import Checkout from "./pages/CheckoutPage/checkout";
import Payment from "./pages/payment/Payment";
import CheckoutSuccess from "./pages/Checkout-Success-page/CheckoutSuccess";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  getProducts,
  calculateTotalCart,
} from "./features/products/ProductSlice";
import "./App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const loggedInUserToken = localStorage.getItem("token");
  const { cartProducts } = useSelector((state) => state.store);
  const dispatch = useDispatch();

  const getUser = (user) => {
    axios
      .post(`http://localhost:7000/users/user`, user, {
        headers: {
          "x-access-token": loggedInUserToken,
        },
      })
      .then((response) => {
        console.log(response.data.user);
        setLoggedInUser(response.data.user);
        // navigate("/");
      })
      .catch((error) => console.log(error.response.data));
  };
  // fetch data
  useEffect(() => {
    console.log(loggedInUser?.email);
    getUser(loggedInUser);
    dispatch(getProducts({ url: import.meta.env.VITE_PRODUCTS_URL }));
  }, []);
  useEffect(() => {
    dispatch(calculateTotalCart());
  }, [cartProducts]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loggedInUser ? <HomePage /> : <SignUp />} />
          <Route path="/details/:productName" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
          <Route
            path="/checkout-success"
            element={<CheckoutSuccess user={loggedInUser} />}
          />
          <Route path="logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<h4>no route match</h4>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
