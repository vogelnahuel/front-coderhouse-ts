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
  import { actions as notificationActions } from "../reducers/notification";

  
  const sagas: ForkEffect<never>[] = [
    takeLatest(actions.getAllProductRequest.type, getAllProducts),
    takeLatest(actions.getByIdProductRequest.type, getById),
    takeLatest(actions.updateProductRequest.type, updateProduct),
    takeLatest(actions.deleteProductRequest.type, deleteProduct),
    takeLatest(actions.createProductRequest.type, createProduct),
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

  function* getById({
    payload
  }:any): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
  void,
  any
> {
  const response = yield call(productServices.getProduct,payload);
  if (response.status !== 200) {
    yield put(
      notificationActions.showNotification({
        level: "error",
        title:"No se pudo obtener",
        body: "Intente nuevamente",
      })
    );
    yield put(actions.getByIdProductError());
  } else {
    
    yield put(actions.getByIdProductSuccess(response.data.data));
  }
}

function* updateProduct({
  payload
}:any): Generator<
CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
void,
any
> {
  const values = {
    name:payload.params.name || '',
    price:parseInt(payload.params.price) || 0,
    stock:parseInt(payload.params.stock) || 0,
    photo:payload.params.photo || '',
    code:payload.params.code || '',
    description:payload.params.description || '',
    timestamp:payload.params.timestamp || '',
  }
const response = yield call(productServices.updateProduct,payload.id,values);
if (response.status !== 200) {
  yield put(
    notificationActions.showNotification({
      level: "error",
      title:"No se pudo actualizar",
      body: "Intente nuevamente",
    })
  );
  yield put(actions.updateProductError());
} else {
  payload.navigate("/product");
  yield put(actions.updateProductSuccess(response.data.data));
}
}


function* deleteProduct({
  payload
}:any): Generator<
CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
void,
any
> {
const response = yield call(productServices.deleteProducts,payload.id);
if (response.status !== 200) {
  yield put(
    notificationActions.showNotification({
      level: "error",
      title:"No se pudo eliminar",
      body: "Intente nuevamente",
    })
  );
  yield put(actions.deleteProductError());
} else {
  payload.navigate("/product");
  yield put(actions.deleteProductSuccess(response.data.data));
}
}



function* createProduct({
  payload
}:any): Generator<
CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
void,
any
> {
  const values = {
    name:payload.params.name || '',
    price: parseInt(payload.params.price) || 0,
    stock:parseInt(payload.params.stock) || 0,
    photo:payload.params.photo || '',
    code:payload.params.code || '',
    description:payload.params.description || '',
    timestamp:payload.params.timestamp || '',
  }
const response = yield call(productServices.createProduct,values);
if (response.status !== 200) {
  yield put(
    notificationActions.showNotification({
      level: "error",
      title:"No se pudo crear",
      body: "Intente nuevamente",
    })
  );
  yield put(actions.updateProductError());
} else {
  payload.navigate("/product");
  yield put(actions.updateProductSuccess(response.data.data));
}
}
  
 