
import { connect } from "react-redux";
import {
    productSelector
} from "../../../reducers/product";
import { AppDispatch, RootState } from "../../../store";
import { ProductCreate } from "./productCreate";
import { ContainerProductCreateTypes } from "./productCreateTypes";

const ProductContainer = (props: ContainerProductCreateTypes): JSX.Element => {
  return <ProductCreate {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: productSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);