
import { connect } from "react-redux";
import {
  cartSelector,
  actions as cartActions
} from "../../../reducers/cart";
import { AppDispatch, RootState } from "../../../store";
import { CartProduct } from "./cartProduct";
import { ContainerCartProductTypes } from "./cartProductTypes";
import { useNavigate } from 'react-router-dom';

const CartProductContainer = (props: ContainerCartProductTypes): JSX.Element => {
  const navigate = useNavigate();
  return <CartProduct {...props}  navigate={navigate}/>;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: cartSelector(state).fetching,
  cartSelected : cartSelector(state).cartSelected
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  AddProductCart: (idCart:string,idProduct:any,navigate:any) => {
    dispatch(cartActions.addProductCartRequest({idCart,idProduct,navigate}));
  },
  DeleteProductCart: (idCart:string,idProduct:any,navigate:any)  => {
    dispatch(cartActions.deleteProductCartRequest({idCart,idProduct,navigate}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProductContainer);