
import { connect } from "react-redux";
import {
    cartSelector
} from "../../../reducers/cart";
import { AppDispatch, RootState } from "../../../store";
import { CartById } from "./cartProduct";
import { ContainerCartProductTypes } from "./cartProductTypes";

const CartByIdContainer = (props: ContainerCartProductTypes): JSX.Element => {
  return <CartById {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: cartSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(CartByIdContainer);