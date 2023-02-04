import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Dashboard from "./dashboard/dashboard";
import Error from "./Error/error";
import Productpage from "./Productpage/productpage";
import Cart from "./cart/cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<Productpage />} />
        <Route path="/dashboard/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
