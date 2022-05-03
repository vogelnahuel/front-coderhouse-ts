import {
  call,
  takeLatest,
  put,
  CallEffect,
  PutEffect,
  ForkEffect,
} from "redux-saga/effects";
import { actions } from "../reducers/login";
import * as loginServices from "../services/login";
import { AxiosResponse } from "axios";
import { actions as notificationActions } from "../reducers/notification";

const sagas: ForkEffect<never>[] = [
  takeLatest(actions.postLoginRequest.type, postLogin),
  takeLatest(actions.postCreateUserRequest.type, postCreateUser),
];

export default sagas;

function* postLogin({
  payload,
}: any): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
  void,
  any
> {
  const response = yield call(loginServices.postLogin, payload.params);
  if (response.status !== 200) {
    yield put(actions.postLoginError());
  } else {
    payload.navigate("/dashboard");
    yield put(actions.postLoginSuccess(response.data.data));
  }
}


function* postCreateUser({
  payload,
}: any): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<{ type: string }>,
  void,
  any
> {
  payload.params.age = parseInt(payload.params.age);
  const response = yield call(loginServices.postUserCreate, payload.params);

  if (response.status !== 200) {
    yield put(
      notificationActions.showNotification({
        level: "error",
        title:"No se pudo crear",
        body: "Intente nuevamente",
      })
    );
    yield put(actions.postCreateUserError());
  } else {
    yield put(
      notificationActions.showNotification({
        level: "success",
        title:"Se creo correctamente",
        body: "Ingresa!",
      })
    );
    payload.navigate("/");
    yield put(actions.postCreateUserSuccess(response.data.data));
  }
}

