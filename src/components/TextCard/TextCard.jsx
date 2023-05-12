import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";
import { NoteAPI } from "../../api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "../../store/notes/note-slice";
import { useNavigate } from "react-router-dom";

export function TextCard({
  onClickTrash,
  onClick,
  title,
  subtitle,
  content,
  noteid,
}) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  async function deleteNote(id) {
    //console.log(title);
    const prompt = window.confirm(`Deleting ${title}`);
    if (prompt) {
      await NoteAPI.deleteById(id);
    }
    //const status = await NoteAPI.deleteById(id);
    fetchAllNotes();
  }
  function onClickTrash_(e) {
    //console.log(noteid);
    onClickTrash(noteid);
    deleteNote(noteid);
    
    e.stopPropagation();
  }

  return (
    <div
      onClick={onClick}
      className={`card ${s.container} `}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}

    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <Trash
            onClick={onClickTrash_}
            size={20}
            style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
          />
        </div>

        <h6 className={`card-subtitle mb-2 text-muted`}>{subtitle}</h6>
        <p className={`card-text ${s.text}`}>{content}</p>
      </div>
    </div>
  );
}
