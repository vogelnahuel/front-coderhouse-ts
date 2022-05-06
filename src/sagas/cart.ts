import {
    call,
    takeLatest,
    put,
    CallEffect,
    PutEffect,
    ForkEffect,
  } from "redux-saga/effects";
  import { actions } from "../reducers/cart";
  import * as cartServices from "../services/cart";
  import { AxiosResponse } from "axios";
  import { actions as notificationActions } from "../reducers/notification";

  const sagas: ForkEffect<never>[] = [
    takeLatest(actions.getcartRequest.type, getCart),
  ];
    
  export default sagas;


  
  function* getCart({
    payload
  }:any): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
  void,
  any
> {
  const response = yield call(cartServices.getCart,payload);
  if (response.status !== 200) {
    yield put(
      notificationActions.showNotification({
        level: "error",
        title:"No se pudo obtener",
        body: "Intente nuevamente",
      })
    );
    yield put(actions.getcartError());
  } else {
    
    yield put(actions.getcartSuccess(response.data.data));
  }
}