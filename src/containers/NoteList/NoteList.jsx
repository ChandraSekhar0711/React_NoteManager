import { useDispatch, useSelector } from "react-redux";
import { TextCard } from "../../components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { deleteNote } from "../../store/notes/note-slice";
import { NoteAPI } from "../../api/note-api";
import { toast } from "../../services/sweet-alert";
export function NoteList({noteList}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function deleteNote_(note) {
    if (window.confirm("Delete note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      toast("success", "note deleted successfully");
    }
  }

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
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
