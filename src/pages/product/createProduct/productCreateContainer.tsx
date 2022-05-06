
import { connect } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  actions as productActions,
  productSelector
} from "../../../reducers/product";
import { AppDispatch, RootState } from "../../../store";
import { ProductCreate } from "./productCreate";
import { ContainerProductCreateTypes } from "./productCreateTypes";
import * as Yup from 'yup'
import { VALIDATION_REGEX } from "../../../constants/Regex";

const ProductContainer = (props: ContainerProductCreateTypes): JSX.Element => {
  const navigate = useNavigate();
  const validationSchema:Yup.SchemaOf<any> = Yup.object({
    name:Yup.string().required(),
    price:Yup.string().required("Este campo es requerido").matches(VALIDATION_REGEX.regNumber,"Solo se permiten numeros"),
    stock:Yup.string().required("Este campo es requerido").matches(VALIDATION_REGEX.regNumber,"Solo se permiten numeros"),
    photo:Yup.string().required("Este campo es requerido"),
    code:Yup.string().required("Este campo es requerido"),
    description:Yup.string().required("Este campo es requerido"),
    timestamp:Yup.string().required("Este campo es requerido")
  })
  return <ProductCreate {...props} navigate={navigate} validationSchema={validationSchema}/>;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: productSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  createProduct: (params:any,navigate: NavigateFunction) => {
    dispatch(productActions.createProductRequest({params,navigate}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);