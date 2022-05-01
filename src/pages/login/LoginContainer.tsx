import { useEffect } from "react";
import { connect } from "react-redux";
import {
  actions as loginActions, loginSelector,
} from "../../reducers/login";
import { AppDispatch, RootState } from "../../store";
import { Login } from "./Login";
import { LoginContainerTypes } from "./LoginTypes";

const LoginContainer = (props: LoginContainerTypes): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Login {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  login: loginSelector(state).login,
  isFetching: loginSelector(state).fetching,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  postLogin: () => {
    dispatch(loginActions.postLoginRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);