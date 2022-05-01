import { useEffect } from "react";
import { connect } from "react-redux";
import {
  actions as loginActions, loginSelector,
} from "../../reducers/login";
import { AppDispatch, RootState } from "../../store";
import { Login } from "./Login";
import { LoginContainerTypes, LoginSchema } from "./LoginTypes";
import * as Yup from 'yup'
import { VALIDATION_REGEX } from "../../constants/Regex";


const LoginContainer = (props: LoginContainerTypes): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  const validationSchema:Yup.SchemaOf<LoginSchema> = Yup.object({
    email:Yup.string().required().matches(VALIDATION_REGEX.regEmail,"Email Invalido"),
    password:Yup.string().required("Esta campo es requerido")
  })

  return <Login {...props} validationSchema={validationSchema}/>;
};

const mapStateToProps = (state: RootState) => ({
  login: loginSelector(state).login,
  isFetching: loginSelector(state).fetching,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  postLogin: (params:any) => {
    dispatch(loginActions.postLoginRequest(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);