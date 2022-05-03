
import { connect } from "react-redux";
import {
    loginSelector
} from "../../../reducers/login";
import { AppDispatch, RootState } from "../../../store";
import { CreateUsers } from "./createUser";
import { ContainercreateUserTypes } from "./createUserTypes";

const MessageContainer = (props: ContainercreateUserTypes): JSX.Element => {
  return <CreateUsers {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: loginSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);