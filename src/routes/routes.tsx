import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginContainer from "../pages/login/LoginContainer";

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
          <Route path="dashboard" element={<h1>HolaMUNDO DASHBOARD</h1>} />
          <Route path="product" element={<h1>HolaMUNDO</h1>} />
          <Route path="message" element={<h1>HolaMUNDO</h1>} />
          <Route path="cart" element={<h1>HolaMUNDO</h1>} />
          <Route path="restore" element={<h1>HolaMUNDO</h1>} />
          <Route path="createUser" element={<h1>HolaMUNDO</h1>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Router;
