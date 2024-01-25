import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Cart from "./cart";
import Login from "./login";
import CreateAnacount from "./create-acount";
const RoutControler = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-acount" element={<CreateAnacount />} />
      </Routes>
    </div>
  );
};

export default RoutControler;
