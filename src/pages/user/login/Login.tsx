import { LoginTypes } from "./LoginTypes";
import { Form, Formik } from "formik";

import { Input } from "../../../components/input/input";
import "./login.scss";
import { Link } from "react-router-dom";

export const Login: React.FC<LoginTypes> = ({
  login,
  isFetching,
  postLogin,
  validationSchema,
  navigate,
}): JSX.Element => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          postLogin(values, navigate);
        }}
      >
        {(formik) => (
          <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Input label="ingrese su email" name="email" id="email" />
            <Input label="ingrese password" name="password" id="password" />
            <div className="container-buttons-login">
              <button className="login-button" type="submit">
                Ingresar
              </button>
              <button
                className="login-button"
                type="button"
                onClick={formik.handleReset}
              >
                Resetear formulario
              </button>
            </div>
          </Form>
          
        )}
      </Formik>
      <div className="container-login-a">
        <Link className="login-a" to={"/createUser"}>
           Crear Usuario
        </Link>
      </div>
    </div>
  );
};
