
import { connect } from "react-redux";
import {
    cartSelector
} from "../../../reducers/cart";
import { AppDispatch, RootState } from "../../../store";
import { CartById } from "./cartById";
import { ContainerCartByIdTypes } from "./cartByIdTypes";

const CartByIdContainer = (props: ContainerCartByIdTypes): JSX.Element => {
  return <CartById {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: cartSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(CartByIdContainer);