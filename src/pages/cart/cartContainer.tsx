
import { connect } from "react-redux";
import {
    cartSelector,
    actions as cartActions
} from "../../reducers/cart";
import { AppDispatch, RootState } from "../../store";
import { Cart } from "./cart";
import { ContainerCartTypes } from "./cartTypes";
import {useEffect} from 'react';

const CartContainer = (props: ContainerCartTypes): JSX.Element => {
  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return <Cart {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching:   cartSelector(state).fetching,
  cartSelected: cartSelector(state).cartSelected,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);