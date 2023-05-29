import s from "./style.module.css"
import { ReactComponent as LogoSVG } from "../../../src/assets/images/logo.svg"
const header = <div className={s.header}>
    <LogoSVG className={s.logoTop} />
    <h3 className={s.logoTitle}>Notomatic</h3>
</div>;

const background = <div>
    <div className="d-flex">
        <LogoSVG className={s.logo} />
        <h1 className={s.title}>Notomatic</h1>
    </div>
    <p style={{ color: "white" }}>One place for the team notes</p>
</div>

export function Authlayout({ children }) {
    return <div className={s.root}>
        {header}
        <div className={s.leftSection}>{children}</div>
        <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
}