
import { useEffect } from "react";
import { connect } from "react-redux";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import {
  actions as productActions,
  productSelector
} from "../../../reducers/product";
import { AppDispatch, RootState } from "../../../store";
import { ProductById } from "./productById";
import { ContainerProductByIdTypes } from "./productByIdTypes";
import * as Yup from 'yup'
import { VALIDATION_REGEX } from '../../../constants/Regex';

const ProductByIdContainer = (props: ContainerProductByIdTypes): JSX.Element => {
  const { id } = useParams()
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

  useEffect(() => {
    props.getById(id || "")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return <ProductById {...props} validationSchema={validationSchema} navigate={navigate} id={id}/>;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: productSelector(state).fetching,
  productSelected:productSelector(state).productSelected
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getById: (id:string) => {
    dispatch(productActions.getByIdProductRequest(id));
  },
  updateProduct: (params:any,navigate: NavigateFunction,id:string) => {
    dispatch(productActions.updateProductRequest({params,navigate,id}));
  },
  deleteProduct: (id:string,navigate:NavigateFunction) => {
    dispatch(productActions.deleteProductRequest({id,navigate}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductByIdContainer);