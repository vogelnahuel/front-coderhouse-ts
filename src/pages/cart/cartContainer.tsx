
import { connect } from "react-redux";
import {
    cartSelector,
    actions as cartActions
} from "../../reducers/cart";
import { AppDispatch, RootState } from "../../store";
import { Cart } from "./cart";
import { ContainerCartTypes } from "./cartTypes";
import {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CartContainer = (props: ContainerCartTypes): JSX.Element => {
  const { id } = useParams()
  const navigate = useNavigate();
  useEffect(() => {
    props.getCartById(id || "")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return <Cart {...props} id={id || ""} navigate={navigate} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching:   cartSelector(state).fetching,
  cartSelected: cartSelector(state).cartSelected,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getCartById: (id:string) => {
    dispatch(cartActions.getcartRequest(id));
  },
  deleteCart: (id:string,navigate:any) => {
    dispatch(cartActions.deleteCartRequest({id,navigate}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);