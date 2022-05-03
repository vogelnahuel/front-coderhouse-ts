
import { connect } from "react-redux";
import {
    productSelector
} from "../../reducers/product";
import { AppDispatch, RootState } from "../../store";
import { Product } from "./product";
import { ContainerProductTypes } from "./productTypes";

const ProductContainer = (props: ContainerProductTypes): JSX.Element => {
  return <Product {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: productSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);