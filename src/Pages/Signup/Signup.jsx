import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import s from "./style.module.css"
import { Input } from "../../components/Input/Input";
import { Authlayout } from "../../Layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthAPI } from "../../api/auth";
import { setUser } from "../../store/auth/auth-slice";
import { toast } from "../../services/sweet-alert";
import { Lock, Person } from "react-bootstrap-icons";
export function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  //console.log(email,password);
  const submit = async (e) => {
    e.preventDefault();
    console.log("Submitted", email, password);
    if (password === password2) {
      try {
        const user = await AuthAPI.signup(email, password);
        dispatch(setUser(user));
        await toast("success", "Account has been created successfully...");
        navigate("/");

      } catch (err) {
        console.log("auth failed",err.message);
        toast("error", err.message);
      }
    }else{
      toast("error","password did not match")
    }
  }
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <div style={{ width: "100%" }}>
          <Person size={25} className={s.icon} />
        <Input placeholder={"Email"} onTextChange={setEmail} />
        </div>
        
        <div style={{ width: "100%" }}>
          <Lock size={25} className={s.icon} />
        <Input placeholder={"Password"} type="password" onTextChange={setPassword} />
        </div>
        
        <div style={{ width: "100%" }}>
          <Lock size={25} className={s.icon} />
        <Input placeholder={"Re-Password"} type="password" onTextChange={setPassword2} />
        </div>
        
        <ButtonPrimary type="submit" className={s.button}>Sign up</ButtonPrimary>
        <span>
          Already have an account ? <Link to={"/signin"}>Signin</Link>
        </span>
      </form>
    </div>
  );
  return <>
    <Authlayout>{form}</Authlayout>
  </>;
}