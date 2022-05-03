
import { connect } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  actions as loginActions, loginSelector,
} from "../../../reducers/login";
import { AppDispatch, RootState } from "../../../store";
import { CreateUsers } from "./createUser";
import { ContainercreateUserTypes } from "./createUserTypes";
import * as Yup from 'yup'
import { VALIDATION_REGEX } from "../../../constants/Regex";

const CreateUserContainer = (props: ContainercreateUserTypes): JSX.Element => {
  const navigate = useNavigate();
  const validationSchema:Yup.SchemaOf<any> = Yup.object({
    email:Yup.string().required().matches(VALIDATION_REGEX.regEmail,"Email Invalido"),
    password:Yup.string().required("Este campo es requerido"),
    name:Yup.string().required("Este campo es requerido"),
    age:Yup.string().required("Este campo es requerido"),
    address:Yup.string().required("Este campo es requerido"),
    phone:Yup.string().required("Este campo es requerido"),
    avatar:Yup.string().required("Este campo es requerido")
  })
  return <CreateUsers {...props} navigate={navigate}  validationSchema ={validationSchema}/>;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: loginSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  postCreateUser: (params:any,navigate: NavigateFunction) => {
    dispatch(loginActions.postCreateUserRequest({params ,navigate}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer);