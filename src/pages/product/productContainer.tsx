
import { connect } from "react-redux";
import {
    cartSelector
} from "../../reducers/cart";
import { AppDispatch, RootState } from "../../store";
import { Product } from "./product";
import { ContainerProductTypes } from "./productTypes";

const ProductContainer = (props: ContainerProductTypes): JSX.Element => {
  return <Product {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: cartSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);