import { Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import Navbar from "./container/Navbar/Navbar"
import Login from "./container/Auth/Login/Login"
import Register from "./container/Auth/Register/Register"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
