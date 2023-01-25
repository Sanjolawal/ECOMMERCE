import { Route, Routes } from "react-router-dom";
import Login from "./signup/login";
import Home from "./Home/Home";
import Dashboard from "./dashboard/dashboard";
import Error from "./Error/error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
