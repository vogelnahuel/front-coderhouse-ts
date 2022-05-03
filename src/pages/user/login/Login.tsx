
import { LoginTypes } from "./LoginTypes";
import { Form, Formik } from "formik";

import { Input } from "../../../components/input/input";
export const Login: React.FC<LoginTypes> = ({
  login,
  isFetching,
  postLogin,
  validationSchema,
  navigate
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
          postLogin(values,navigate);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Input label="ingrese su email" name="email" id="email" />
            <Input label="ingrese password" name="password" id="password" />
            <button type="submit">Ingresar</button>
            <button type="button" onClick={formik.handleReset}>
              Resetear formulario
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
