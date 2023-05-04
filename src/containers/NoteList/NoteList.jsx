import { useSelector } from "react-redux";
import { TextCard } from "../../components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
export function NoteList(props) {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const navigate = useNavigate();
  function deleteById() {
    
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
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={deleteById}
              noteid={note.id}
            />
          </div>
        );
      })}
    </div>
  );
}
