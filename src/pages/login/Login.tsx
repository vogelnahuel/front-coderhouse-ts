import { Header } from "../../components/header";
import { LoginTypes } from "./LoginTypes";

export const Login: React.FC<LoginTypes> = ({
    login,
    isFetching,
    postLogin
  }): JSX.Element => {
    return (
      <div>
            <Header/>
            <button type="button" onClick={postLogin}> test servicio</button>
      </div>
    );
  };