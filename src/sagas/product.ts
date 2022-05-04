import {
    call,
    takeLatest,
    put,
    CallEffect,
    PutEffect,
    ForkEffect,
  } from "redux-saga/effects";
  import { actions } from "../reducers/product";
  import * as productServices from "../services/product";
  import { AxiosResponse } from "axios";
  // import { actions as notificationActions } from "../reducers/notification";
  
  const sagas: ForkEffect<never>[] = [
    takeLatest(actions.getAllProductRequest.type, getAllProducts),
  ];
  
  export default sagas;
  
  function* getAllProducts(): Generator<
    CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
    void,
    any
  > {
    const response = yield call(productServices.getProducts);
    if (response.status !== 200) {
      yield put(actions.getAllProductError());
    } else {
      yield put(actions.getAllProductSuccess(response.data.data));
    }
  }
  
 