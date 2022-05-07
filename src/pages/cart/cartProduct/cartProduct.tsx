import { Form, Formik } from "formik";
import { Header } from "../../../components/header/header";
import { Input } from "../../../components/input/input";
import { Nav } from "../../../components/nav/nav";
import { CartProductypes } from "./cartProductTypes";


export const CartProduct: React.FC<CartProductypes> = ({
  isFetching,
  cartSelected,
  AddProductCart,
  DeleteProductCart,
  navigate
}): JSX.Element => {
  return (
    <>
      <Header/>
    <div className="display-flex-container-dashboard">
      <Nav />
      <div className="pending-container display-container">
          <h2 className="title_Dashboard_Admin">
            Carritos
          </h2>
          <h3 className="subtitle_Dashboard_Admin">
            Ingrese el id del producto a eliminar o agregar puede verlo en la tabla de productos o en la pagina de carritos
          </h3>
          <section className="section-container-form-create">
            <Formik
              enableReinitialize
              initialValues={{
                _id:  "",
              }}
              onSubmit={(values) => {
                AddProductCart(cartSelected._id,values._id,navigate);
              }}
            >
              {(formik) => (
                <Form className="create-form" onSubmit={formik.handleSubmit}>
                  <Input label="id Producto" name="_id" id="_id" />

                  <div>
                    <button className="login-button">Agregar al Carrito</button>
                    <button type="button" 
                    className="login-button"
                    onClick={()=>DeleteProductCart(cartSelected._id,formik.values._id,navigate)}
                    >Eliminar del Carrito</button>
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
