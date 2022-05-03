import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CartContainer from "../pages/cart/cartContainer";
import DashboardContainer from "../pages/dashboard/DashboardContainer";
import MessageContainer from "../pages/messages/messageContainer";
import ProductContainer from "../pages/product/productContainer";
import LoginContainer from "../pages/user/login/LoginContainer";

const Wrapper = ({ children }: any) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route index  element={<LoginContainer/>} />
          <Route path="createUser" element={<h1>HolaMUNDO</h1>} />
          <Route path="dashboard" element={<DashboardContainer/>} />
          <Route path="product" element={<ProductContainer/>} />
          <Route path="productCreate" element={<h1>HolaMUNDO</h1>} />
          <Route path="product/:id" element={<h1>HolaMUNDO</h1>} />
          <Route path="cart" element={<CartContainer/>} />
          <Route path="cartCreate" element={<h1>HolaMUNDO</h1>} />
          <Route path="cart/:id" element={<h1>HolaMUNDO</h1>} />
          <Route path="message" element={<MessageContainer/>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Router;
