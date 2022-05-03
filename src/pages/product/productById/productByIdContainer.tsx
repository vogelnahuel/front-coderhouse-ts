
import { connect } from "react-redux";
import {
    productSelector
} from "../../../reducers/product";
import { AppDispatch, RootState } from "../../../store";
import { ProductById } from "./productById";
import { ContainerProductByIdTypes } from "./productByIdTypes";

const ProductByIdContainer = (props: ContainerProductByIdTypes): JSX.Element => {
  return <ProductById {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: productSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductByIdContainer);