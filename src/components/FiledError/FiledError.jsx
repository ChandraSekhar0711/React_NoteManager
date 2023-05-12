import s from "./style.module.css"
export function FiledError({msg}){
  return (
  
      <span className={s.container}>{msg}</span>
    
  );
}