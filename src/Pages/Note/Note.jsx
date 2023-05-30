import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { NoteAPI } from "../../api/note-api";
import { NoteForm } from "../../components/NoteForm/NoteForm";
import { store } from "../../store";
import { updateNote } from "../../store/notes/note-slice";
import { deleteNote } from "../../store/notes/note-slice";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import { toast } from "../../services/sweet-alert";

export function Note(props) {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);
  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }
  async function deleteNote_() {
    if (window.confirm(`Are you sure to want to delete ${note.title}`)) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      toast("success", "Note deleted successfully");
      navigate("/");
    }
  }
  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit Note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={deleteNote_}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}

//export const ProtectedNote = withAuthRequired(Note);
