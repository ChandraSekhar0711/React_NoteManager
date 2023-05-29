import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import s from "./style.module.css"
import { Input } from "../../components/Input/Input";
import { Authlayout } from "../../Layouts/AuthLayout/AuthLayout";
export function Signup() {
  const submit = ()=>{

  }
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signup <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} />
        <Input placeholder={"Password"} type="password" />
        <Input placeholder={"Re-Password"} type="password" />
        <ButtonPrimary className={s.button}>Sign up</ButtonPrimary>
        <span>
          Already had account ? <Link to={"/signin"}>Signin</Link>
        </span>
      </form>
    </div>
  );
  return <>
    <Authlayout>{form}</Authlayout>
  </>;
}