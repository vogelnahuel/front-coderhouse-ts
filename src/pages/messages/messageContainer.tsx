
import { connect } from "react-redux";
import {
    loginSelector
} from "../../reducers/login";
import { AppDispatch, RootState } from "../../store";
import { Message } from "./message";
import { ContainerMessageTypes } from "./messageTypes";

import { useEffect, useState } from "react";
import io  from "socket.io-client";

const MessageContainer = (props: ContainerMessageTypes): JSX.Element => {
  //
  const temp = io as any;
  const socket = temp.connect(process.env.REACT_APP_API_URL || "http://localhost:8080");
  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on("mensajesList", (data:any) => {
      setResponse(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Message {...props} messages={response} socket={socket} />;
};

const mapStateToProps = (state: RootState) => ({
  isFetching: loginSelector(state).fetching,
  user: loginSelector(state).login
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);