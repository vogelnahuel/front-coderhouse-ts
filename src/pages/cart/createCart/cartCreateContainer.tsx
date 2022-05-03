
import { connect } from "react-redux";
import {
    cartSelector
} from "../../../reducers/cart";
import { AppDispatch, RootState } from "../../../store";
import { Cart } from "./cartCreate";
import { ContainerCartCreateTypes } from "./cartCreateTypes";

const CartCreateContainer = (props: ContainerCartCreateTypes): JSX.Element => {
  return <Cart {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: cartSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(CartCreateContainer);