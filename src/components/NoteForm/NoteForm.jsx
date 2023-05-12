import { useState } from "react";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { ValidatorService } from "../../services/services";
import { FiledError } from "../FiledError/FiledError";
const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};
//console.log(VALIDATOR.title("hd"));
export function NoteForm({ title, onClickIcon, onClickDelete, onSubmit }) {
  const [formValues, setFormValues] = useState({ title: "", content: "" });
  const [formErrors, setFormErrors] = useState({
    title: true,
    content: true,
  });
  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
    validate(name,value);
  };
  const validate = (filedName,filedValue) => {
    setFormErrors({
      ...formErrors,
      [filedName]: VALIDATOR[filedName](filedValue),
    });
  };
const hasErrors = ()=>{
  for (const filedName in formErrors) {
    if(formErrors[filedName]){
      return true;
    }
  }
  return false;
}

  const actionIcons = (
    <>
      <div className={`col-1 ${s.icon}`}>{onClickIcon && <PencilFill />}</div>
      <div className={`col-1 ${s.icon}`}>{onClickDelete && <TrashFill />}</div>
    </>
  );
  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
      />
      <FiledError msg={formErrors.title}/>
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        rows="5"
      />
      <FiledError msg={formErrors.content}/>
    </div>
  );
  const submitButton = (
    <div className={s.submitButton}>
      <ButtonPrimary isDisabled={hasErrors()} onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>
    </div>
  );
  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
          
        </div>
        {actionIcons}
      </div>

      <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {onSubmit && submitButton}
    </div>
  );
}
