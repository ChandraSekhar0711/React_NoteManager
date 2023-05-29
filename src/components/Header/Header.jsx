import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/auth-selector";
import { AuthAPI } from "../../api/auth";
import { setUser } from "../../store/auth/auth-slice";

export function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOutUser =  () =>{
    AuthAPI.signout();
    dispatch(setUser(null));
  }
  const renderUser = ()=>{
    return (
      <div>
        <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`} style={{width:40}} className="rounded-circle"/>
        <div>Hello, {user.email}</div>
        <Link to={"#"} onClick={signOutUser}>Signout</Link>
      </div>
    );
  }
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo onClick={() => navigate("/")} title="Notamatic" />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        {renderUser()}
      </div>
    </div>
  );
}
