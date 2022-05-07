import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Nav } from "../../components/nav/nav";
import { CartTypes } from "./cartTypes";

export const Cart: React.FC<CartTypes> = ({ isFetching,cartSelected,id ,navigate,deleteCart}): JSX.Element => {
  return (
    <>
      <Header />
      <div className="display-flex-container-dashboard">
        <Nav />
        <div className="pending-container display-container">
          <h2 className="title_Dashboard_Admin">Carritos</h2>
          <h3 className="subtitle_Dashboard_Admin">
            si desea modificar los productos de su carrito click 
          </h3>
          <Link to="/cartProduct">Agregar o eliminar productos!</Link>
          <br/>
          <br/>
          <section className="section-container-form-create">
            <Formik
              enableReinitialize
              initialValues={{
                _id: cartSelected._id || "",
                _idUser: cartSelected._idUser || "",
                products: JSON.stringify(cartSelected.products) || "",
                timestamp: cartSelected.timestamp || "",
              }}
              onSubmit={(values) => {
                deleteCart(id || "",navigate);
              }}
            >
              {(formik) => (
                <Form className="create-form" onSubmit={formik.handleSubmit}>
                  <Input label="idCarrito" name="_id" id="_id"  readOnly/>
                  <Input label="idUsuario" name="_idUser" id="_idUser" readOnly/>
                  <Input label="productos" name="products" id="products" readOnly/>
                  <Input label="fecha" name="timestamp" id="timestamp" readOnly/>

                  <div>
                    <button className="login-button">Eliminar Carrito</button>

                  </div>
                </Form>
              )}
            </Formik>
          </section>
        </div>
        {isFetching === true ? <div className="modalLoading"></div> : <></>}
      </div>
    </>
  );
};
