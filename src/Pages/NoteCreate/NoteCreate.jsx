import { NoteForm } from "../../components/NoteForm/NoteForm";
import { NoteAPI } from "../../api/note-api";

import { addNote } from "../../store/notes/note-slice";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import { toast } from "../../services/sweet-alert";
export function NoteCreate() {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const submit = async (formValues) => {
    
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNote(createdNote))
    toast("success", "Note created successfully");
    navigate("/");
  };
  return (
    <>
      <NoteForm title="New Note" onSubmit={submit} />
    </>
  );
}

//export const ProtectedNoteCreate = withAuthRequired(NoteCreate);