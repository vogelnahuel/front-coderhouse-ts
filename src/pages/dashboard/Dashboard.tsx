import { Header } from "../../components/header/header";
import { Nav } from "../../components/nav/nav";
import { DashboardTypes } from "./dashboardTypes";
import './dashboard.scss'
import { Form, Formik } from "formik";

export const Dashboard: React.FC<DashboardTypes> = ({
  isFetching,
  user,
  createCart
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
            Si no tenes carrito createlo aca! (automaticamente se te genera uno al crear usuario)
          </h3>
          <section className="section-container-form-create">
            <Formik
              enableReinitialize
              initialValues={{

              }}
              onSubmit={(values) => {
                createCart(user.User._id);
              }}
            >
              {(formik) => (
                <Form className="create-form" onSubmit={formik.handleSubmit}>
                  <div>
                    <button className="login-button">Crear Carrito</button>
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
