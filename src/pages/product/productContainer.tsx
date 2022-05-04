
import { connect } from "react-redux";

import {
  actions as productActions,
    productSelector
} from "../../reducers/product";
import { AppDispatch, RootState } from "../../store";
import { Product } from "./product";
import { ContainerProductTypes } from "./productTypes";
import {useEffect} from 'react';
// import { NavigateFunction } from "react-router-dom";

const ProductContainer = (props: ContainerProductTypes): JSX.Element => {

  useEffect(() => {

    props.getAllProducts();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return <Product {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: productSelector(state).fetching,
  products:productSelector(state).product
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAllProducts: () => {
    dispatch(productActions.getAllProductRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);