import { Route, Routes } from "react-router-dom";
import Login from "./signup/login";
import Home from "./Home/Home";
import MobileNavbar from "./mobileNavbar/mobileNavbar";
import Mobilemenu from "./mobileMenu/mobileMenu";
import { useState } from "react";
import Dashboard from "./dashboard/dashboard";
import Error from "./Error/error";

function App() {
  const [first, setfirst] = useState(false);

  const changeState = () => {
    setfirst(!first);
  };

  return (
    <div>
      <Mobilemenu name={changeState} state={first} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <MobileNavbar name={changeState} state={first} />
    </div>
  );
}

export default App;
