import { Header } from "../../../components/header/header";
import { createUserTypes } from "./createUserTypes";
import { Form, Formik } from "formik";
import { Input } from "../../../components/input/input";
import './createUser.scss'
import NotificationModal from "../../../components/modal/notificationModal";

export const CreateUsers: React.FC<createUserTypes> = ({
  isFetching,
  validationSchema,
  navigate,
  postCreateUser
}): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <div className=" display-container">
          <h2 className="title_Dashboard_Admin">Dashboard</h2>
          <h3 className="subtitle_Dashboard_Admin">
            visualiza lo mas importante
          </h3>
        
        </div>
        <section className="section-container-form-create">
            <Formik
              initialValues={{
                email: "",
                password: "",
                name: "",
                age: "",
                address: "",
                phone: "",
                avatar: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                postCreateUser(values,navigate)
              }}
            >
              {(formik) => (
                <Form className="create-form" onSubmit={formik.handleSubmit}>
                  <Input label="ingrese su email" name="email" id="email" />
                  <Input
                    label="ingrese password"
                    name="password"
                    id="password"
                  />
                  <Input label="ingrese nombre" name="name" id="name" />
                  <Input label="ingrese edad" name="age" id="age" />
                  <Input label="ingrese direccion" name="address" id="address" />
                  <Input label="ingrese telefono" name="phone" id="phone" />
                  <Input label="ingrese avatar" name="avatar" id="avatar" />
                  <button
                    className="login-button"
                  >
                    Crear usuario
                  </button>
                </Form>
              )}
            </Formik>
          </section>
        {isFetching === true ? <div className="modalLoading"></div> : <></>}
      
      </div>
      <NotificationModal />
    </>
  );
};
