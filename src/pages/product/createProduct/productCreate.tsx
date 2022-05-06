import { Form, Formik } from "formik";
import { Header } from "../../../components/header/header";
import { Input } from "../../../components/input/input";
import { Nav } from "../../../components/nav/nav";
import { ProductCreateTypes } from "./productCreateTypes";


export const ProductCreate: React.FC<ProductCreateTypes> = ({
  isFetching,
  validationSchema,
  navigate,
  createProduct
}): JSX.Element => {
  return (
    <>
      <Header/>
    <div className="display-flex-container-dashboard">
      <Nav />
      <div className="pending-container display-container">
          <h2 className="title_Dashboard_Admin">
            Dashboard
          </h2>
          <h3 className="subtitle_Dashboard_Admin">
            visualiza lo mas importante
          </h3>
          <section className="section-container-form-create">
          <Formik
            enableReinitialize 
            initialValues={{
              name:  '' ,
              price: '',
              stock:  '',
              photo:'',
              code:  '',
              description:  '',
              timestamp:  '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              createProduct(values,navigate)
            }}
          >
            {(formik) => (
              <Form className="create-form" onSubmit={formik.handleSubmit}>
                <Input label="nombre" name="name" id="name" />
                <Input label="precio" name="price" id="price" />
                <Input label="stock" name="stock" id="stock" />
                <Input label="foto" name="photo" id="photo" />
                <Input label="codigo" name="code" id="code" />
                <Input label="descripcion" name="description" id="description" />
                <Input label="fecha" name="timestamp" id="timestamp" />
                <div>
                    <button className="login-button">Crear</button>
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
