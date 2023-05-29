import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NoteAPI } from "./api/note-api";
import { setNoteList } from "./store/notes/note-slice";
import s from "./style.module.css"
import { withAuthRequired } from "./hoc/withAuthRequired";
import { ButtonPrimary } from "./components/ButtonPrimary/ButtonPrimary";
export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);
  return (
    <>
      <Header />
      <ButtonPrimary className={s.addButton} onClick={() => navigate("/note/new")}>
           +
        </ButtonPrimary>
      <div className={s.workspace}>
        <Outlet />
      </div>
    </>
  );
}

export const ProtectedApp = withAuthRequired(App);
