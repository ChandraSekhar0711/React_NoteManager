import { Search as SearchIcon } from "react-bootstrap-icons"
import { Input } from "../Input/Input"
import s from "./style.module.css"
export function SearchBar({ onTextChange, placeholder }) {
    return (
      <>
        <SearchIcon size={25} className={s.icon} />
        <Input onTextChange={onTextChange} placeholder={placeholder} />
      </>
    );
}