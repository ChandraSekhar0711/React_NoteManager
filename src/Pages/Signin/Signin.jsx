import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import s from "./style.module.css"
import { Input } from "../../components/Input/Input";
import { Authlayout } from "../../Layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthAPI } from "../../api/auth";
import { setUser } from "../../store/auth/auth-slice";
export function Signin() {
  const dispatch = useDispatch();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  //console.log(email,password);
  const submit = async (e)=>{
    e.preventDefault();
    console.log("Submitted",email,password);
    try{
      const user = await AuthAPI.signin(email,password);
    dispatch(setUser(user));
  }catch(err){
    console.log("auth failed");
  }
}
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} onTextChange={setEmail}/>
        <Input placeholder={"Password"} type="password" onTextChange={setPassword}/>
        <ButtonPrimary type="submit" className={s.button}>Sign in</ButtonPrimary>
        <span>
          Don't have an account yet ? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );
  return <>
    <Authlayout>{form}</Authlayout>
  </>;
}