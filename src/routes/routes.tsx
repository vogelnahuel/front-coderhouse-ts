import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CartByIdContainer from "../pages/cart/cartById/cartByIdContainer";
import CartContainer from "../pages/cart/cartContainer";
import CartCreateContainer from "../pages/cart/createCart/cartCreateContainer";
import DashboardContainer from "../pages/dashboard/DashboardContainer";
import MessageContainer from "../pages/messages/messageContainer";
import ProductCreateContainer from "../pages/product/createProduct/productCreateContainer";
import ProductByIdContainer from "../pages/product/productById/productByIdContainer";
import ProductContainer from "../pages/product/productContainer";
import CreateUserContainer from "../pages/user/createUser/createUserContainer";
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
          <Route path="createUser" element={<CreateUserContainer/>} />
          <Route path="dashboard" element={<DashboardContainer/>} />
          <Route path="product" element={<ProductContainer/>} />
          <Route path="productCreate" element={<ProductCreateContainer/>} />
          <Route path="product/:id" element={<ProductByIdContainer/>} />
          <Route path="cart" element={<CartContainer/>} />
          <Route path="cartCreate" element={<CartCreateContainer/>} />
          <Route path="cart/:id" element={<CartByIdContainer/>} />
          <Route path="message" element={<MessageContainer/>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Router;
