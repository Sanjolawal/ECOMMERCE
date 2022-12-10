import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home/Home";
import Footer from "./footer/footer";
import MobileNavbar from "./mobileNavbar/mobileNavbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <MobileNavbar />
    </div>
  );
}

export default App;
