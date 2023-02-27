import { useContext } from "react";
import loginContext from "../Login/Context/loginContext ";
import Login from "../Login/Login";
import Quora from "../Quora/Quora";

export default function Auth() {
  const { state } = useContext(loginContext);

  return <div>{state.isLoggedIn ? <Quora /> : <Login />}</div>;
}
