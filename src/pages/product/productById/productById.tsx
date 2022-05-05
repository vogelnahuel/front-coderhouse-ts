import { Form, Formik } from "formik";
import { Header } from "../../../components/header/header";
import { Input } from "../../../components/input/input";
import { Nav } from "../../../components/nav/nav";
import { ProductByIdTypes } from "./productByIdTypes";

export const ProductById: React.FC<ProductByIdTypes> = ({
  isFetching,
  validationSchema,
  updateProduct,
  deleteProduct,
  productSelected,
  navigate,
  id
}): JSX.Element => {
  return (
    <>
      <Header />
      <div className="display-flex-container-dashboard">
        <Nav />
        <div className="pending-container display-container">
          <h2 className="title_Dashboard_Admin">Dashboard</h2>
          <h3 className="subtitle_Dashboard_Admin">
            visualiza lo mas importante
          </h3>
          <section className="section-container-form-create">
          <Formik
            enableReinitialize 
            initialValues={{
              name: productSelected.name || '' ,
              price: productSelected.price || '',
              stock: productSelected.stock || '',
              photo: productSelected.photo || '',
              code: productSelected.code|| '',
              description: productSelected.description|| '',
              timestamp: productSelected.timestamp|| '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              updateProduct(values,navigate,id || '')
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
                    <button className="login-button">Actualizar</button>
                    <button className="login-button" type="button"
                     onClick={()=>deleteProduct(id || "",navigate)}>Eliminar</button>
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
