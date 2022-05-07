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
    takeLatest(actions.deleteCartRequest.type, deleteCart),
    takeLatest(actions.createCartRequest.type, createCart),
    takeLatest(actions.addProductCartRequest.type, addProductCart),
    takeLatest(actions.deleteProductCartRequest.type, deleteProductCart),
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


function* deleteCart({
  payload
}:any): Generator<
CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
void,
any
> {
 
const response = yield call(cartServices.deleteCart,payload.id);
if (response.status !== 200) {
  yield put(
    notificationActions.showNotification({
      level: "error",
      title:"No se pudo obtener",
      body: "Intente nuevamente",
    })
  );
  yield put(actions.deleteCartError());
} else {
  payload.navigate("/dashboard")
  yield put(actions.deleteCartSuccess(response.data.data));
}
}



function* createCart({
  payload
}:any): Generator<
CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
void,
any
> {
  
  console.log("ENTRE",payload)
const response = yield call(cartServices.createCartServices,payload);
console.log("ENTRE",payload)
if (response.status !== 200) {
  yield put(
    notificationActions.showNotification({
      level: "error",
      title:"No se pudo obtener",
      body: "Intente nuevamente",
    })
  );
  yield put(actions.createCartError());
} else {

  yield put(actions.createCartSuccess(response.data.data));
}
}



function* addProductCart({
  payload
}:any): Generator<
CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
void,
any
> {
const response = yield call(cartServices.addProductCart,payload.idProduct,payload.idCart);
if (response.status !== 200) {
  yield put(
    notificationActions.showNotification({
      level: "error",
      title:"No se pudo obtener",
      body: "Intente nuevamente",
    })
  );
  yield put(actions.addProductCartError());
} else {

  yield put(actions.addProductCartSuccess(response.data.data));
}
}



function* deleteProductCart({
  payload
}:any): Generator<
CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
void,
any
> {
const response = yield call(cartServices.deleteProductCart,payload.idCart,payload.idProduct);
if (response.status !== 200) {
  yield put(
    notificationActions.showNotification({
      level: "error",
      title:"No se pudo obtener",
      body: "Intente nuevamente",
    })
  );
  yield put(actions.deleteProductCartError());
} else {

  yield put(actions.deleteProductCartSuccess(response.data.data));
}
}