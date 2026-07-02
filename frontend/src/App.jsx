import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import About from "./Pages/About.jsx";
import Collections from "./Pages/Collections.jsx";
import Contact from "./Pages/Contact.jsx";
import Profile from "./Pages/Profile.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Admin from "./Pages/Admin.jsx";
import ProductDetail from "./Pages/Productdetails.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Navbar from "./Components/Navbar.jsx";
import OrderHistory from "./Pages/OrderHistory.jsx";
import Success from "./Pages/Success.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/productdetail" element={<ProductDetail />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/orderhistory" element={<OrderHistory />} />
         <Route path="/success" element={<Success />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;