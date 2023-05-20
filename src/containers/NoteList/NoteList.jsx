import { useDispatch, useSelector } from "react-redux";
import { TextCard } from "../../components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { deleteNote } from "../../store/notes/note-slice";
import { NoteAPI } from "../../api/note-api";
export function NoteList({noteList}) {
  //const noteList = useSelector((store) => store.noteSlice.noteList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function deleteNote_(note) {
    if (window.confirm("Delete note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }
  //console.log(noteList);
  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        //console.log(note);
        return (
          <div className={s.card_container} key={note.id}>
            <TextCard
              title={note.title}
              subtitle={note.created_at}
              content={note.content}
              onClickCard={() => navigate("/note/" + note.id)}
              onClickTrash={()=>deleteNote_(note)}
              noteid={note.id}
            />
          </div>
        );
      })}
    </div>
  );
}
