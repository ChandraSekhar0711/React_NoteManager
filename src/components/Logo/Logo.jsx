import s from "./style.module.css";
export function Logo({title,onClick}) {
  return (
    <div onClick={onClick}>
      <div className={s.container}>
        <div className={s.title}>{title}</div>
      </div>
    </div>
  );
}
