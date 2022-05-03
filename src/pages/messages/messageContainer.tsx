
import { connect } from "react-redux";
import {
    cartSelector
} from "../../reducers/cart";
import { AppDispatch, RootState } from "../../store";
import { Message } from "./message";
import { ContainerMessageTypes } from "./messageTypes";

const MessageContainer = (props: ContainerMessageTypes): JSX.Element => {
  return <Message {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: cartSelector(state).fetching,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);