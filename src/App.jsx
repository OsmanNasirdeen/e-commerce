import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/CheckoutPage/form/Form";
import Checkout from "./pages/CheckoutPage/checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
