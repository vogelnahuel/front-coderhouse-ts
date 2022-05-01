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
  
  const sagas:ForkEffect<never>[] = [takeLatest(actions.postLoginRequest.type,postLogin)];
  
  export default sagas;
  
  function* postLogin({payload}:any): Generator<
    CallEffect<AxiosResponse<any>> | PutEffect<{ type: string;}>,
    void,
    any
  > {

    const response = yield call(loginServices.postLogin,payload);
    if (response.status !== 200) {
      yield put(actions.postLoginError());
    } else {
      const { result } = response.data;
      yield put(actions.postLoginSuccess(result));
    }
  }